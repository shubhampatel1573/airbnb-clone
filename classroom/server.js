const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

// connect flash

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Session 


const sessionOptions = {
    secret: "mysupersecretstring",
    resave: false,
    saveUninitialized: true,
};

app.use(session(sessionOptions));
app.use(flash());

app.use((req, res, next)=>{
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    return next();
})

app.get("/register", (req, res) => {
    let { name = "anonymous" } = req.query;
    req.session.name = name;
    console.log(req.session);
    if(name === "anonymous"){
        req.flash("error", "user not registered");
    } else{
        req.flash("success", "user registered successfully! ")
    }
    res.redirect("/hello")
})

app.get("/hello", (req, res) => {
    // res.send(`Hello! ${req.session.name}`);
    //  res.render("page.ejs", {name : req.session.name, msg: req.flash("success")});

    // res.locals.successMsg = req.flash("success");
    // res.locals.errorMsg = req.flash("error");

    res.render("page.ejs", { name: req.session.name });
});






app.get("/reqcount", (req, res) => {
    if (req.session.count) {
        req.session.count++;
    } else {
        req.session.count = 1;
    }
    res.send(`you send request ${req.session.count}`);
})


app.get("/test", (req, res) => {
    res.send("test successful!");
});









// Cookie

// app.use(cookieParser("secretcode"));

// app.get("/getsignedcookie", (req, res)=>{
//     res.cookie("made-in", "india", {signed: true});
//     res.send("signed cookies send");
// })

// app.get("/verify", (req, res)=>{
//     console.log(req.cookies);
//     console.log(req.signedCookies)
//     res.send("verified");
// })

// app.get("/greet", (req, res)=>{
//     const {name = "anaonyms"} = req.cookies;
//     res.send(`hellooo ${name}`);
// })

// app.get("/getcookies", (req, res)=>{
//     res.cookie("greet", "namaste");
//     res.cookie("madein", "india");
//     res.send("send you some cookies!");
// });

// app.get("/", (req, res)=>{
//     console.dir(req.cookies);
//     res.send("Home Route !");
// });

app.listen("3000", () => {
    console.log("app is listening in port 3000");
});