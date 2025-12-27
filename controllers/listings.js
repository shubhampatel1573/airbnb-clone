const Listing = require("../models/listing");
const wrapAsync = require("../utils/wrapAsync.js");

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
    console.log(req.user)
    // if(!req.isAuthenticated()){
    //     req.flash("error", "you must be logged in to create listing");
    //     return  res.redirect("/login");
    // }
    res.render("listings/new.ejs");
};

module.exports.showListing  =  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id).populate( {path:"reviews", populate: {path:"author"}}).populate("owner");
    if (!listing) {
        req.flash("error", "Listing Does Not Exist!");
        return res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs", { listing });
});

module.exports.createListing = wrapAsync(async (req, res, next) => {
    // let {titile, description, image, price, country, location} = req.body;

    // let listings = req.body.listing;
    // console.log(listings);

    // if (!req.body.listing) {
    //     throw new ExpressError(400, "Send Valid data for listing")
    // }

    // let result = listingSchema.validate(req.body);
    // console.log(result);

    // if(result.error) {
    //     throw new ExpressError(400, result.error);
    // }

    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "New Listing Created!")
    res.redirect("listings");
});

module.exports.renderEditForm = wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing Does Not Exist!");
        return res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listing });
});

module.exports.updateListing = wrapAsync(async (req, res) => {

    // if (!req.body.listing) {
    //     throw new ExpressError(400, "Send Valid data for listing")
    // }
    let { id } = req.params;

    // let listing =  await Listing.findById(id);
    // if (!listing.owner._id.equals(res.locals.currUser._id)) {
    //     req.flash("error", "you don't have permission to access edit");
    //     return res.redirect(`/listings/${id}`)
    // }
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success", "Listing Updated!")
    res.redirect(`/listings/${id}`)
});

module.exports.destroyListing = wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted!")
    res.redirect("/listings");
});
