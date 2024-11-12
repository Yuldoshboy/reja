console.log("Web Serverni boshlash!");
const http = require('http'); 
// Installing and calling Express
const express = require("express");
const res = require("express/lib/response");
const app = express(); //app bu yerda instance, bu esa expressning app objectini chaqiradi

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
    console.log(req);
    res.json({test: "Success!"});
});
app.get("/", function (req, res) {
    res.render("xarid");
})

// app.get("/hello", function(req, res) {
//     res.end(`<h1 style="font-style:italic; background:green">Hello World by Jacob!</h1>`);
// });
// app.get("/gift", function(req, res) {
//     res.end(`<h1 style="font-style:italic">Siz sovg'alar bo'limidasiz!</h1>`);
// });
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`Server is successfully run on the port: ${PORT}`);
});

/// BSSR--- Backend Server Site Rendering----Backendda HTMLni qurib olish

