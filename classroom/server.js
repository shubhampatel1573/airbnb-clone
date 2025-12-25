const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser("secretcode"));

app.get("/getsignedcookie", (req, res)=>{
    res.cookie("made-in", "india", {signed: true});
    res.send("signed cookies send");
})

app.get("/verify", (req, res)=>{
    console.log(req.cookies);
    console.log(req.signedCookies)
    res.send("verified");
})

app.get("/greet", (req, res)=>{
    const {name = "anaonyms"} = req.cookies;
    res.send(`hellooo ${name}`);
})

app.get("/getcookies", (req, res)=>{
    res.cookie("greet", "namaste");
    res.cookie("madein", "india");
    res.send("send you some cookies!");
});

app.get("/", (req, res)=>{
    console.dir(req.cookies);
    res.send("Home Route !");
});

app.listen("3000", ()=>{
    console.log("app is listening in port 3000");
});