console.log("Web Serverni boshlash!");
// Installing and calling Express
const express = require("express");
const res = require("express/lib/response");
const app = express(); //app bu yerda instance, bu esa expressning app objectini chaqiradi

const fs = require("fs");
let user;
fs.readFile("database/user.json", "utf8", (err, data)  => {
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data);
    }
});

// Mongo DB connect

const db = require("./server").db();        /// databasedagi malumotlarni tahrirlash uchun

//Bosqichlar
// 1-bosqich-----------KIRISH KODLARI----Expressga kirib kelayotgna malumotlarga bogliq bulgan kodlar yoziladi.

app.use(express.static("public")); // bu har qanday browserdan kirib kelayotgan surovlarga proyektimizni "Public" folderi ochiq degan manoni anglatadi. 
//Keyinchlik biz public folder ichiga proyekt css va kerakli imagelarni joylaymiz

app.use(express.json());         // kirib kelayotgan json datani object qilib beradi. Bilamizki client va web server orasidagi data JSON kurinishidadir.

app.use(express.urlencoded({extended: true}));      // bu yerda esa express HTMLdan traditional form request orqali post qilingan narsalarni qabul qilib oladi aks holda qabul qilmaydi

// 2-bosqich-----Sessionlarga bogliq narsalar yoziladi 
// 3-bosqich------- Views code

app.set("views", "views");
app.set("view engine", "ejs");

// 4-bosqich-----Routing code
app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({test: "Success!"});
});
app.get("/author", (req, res) => {
    res.render("author", {user: user});
});
app.get("/", function (req, res) {
    res.render("reja");
});

app.get("/hello", function(req, res) {
    res.end(`<h1 style="font-style:italic; background:green">Hello World by Jacob!</h1>`);
});
app.get("/gift", function(req, res) {
    res.end(`<h1 style="font-style:italic">Siz sovg'alar bo'limidasiz!</h1>`);
});

module.exports = app;