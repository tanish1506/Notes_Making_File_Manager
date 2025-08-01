const express = require('express');
const app = express()
const fs = require('node:fs')
const path = require('path')

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'public')))

app.get("/",function(req,res){
    fs.readdir(`./files`,function(err,files){
        console.log(files)
        res.render("index", { files : files})
    })
})

app.get('/files/:filename',function(req,res){
    fs.readFile(`./files/${req.params.filename}`,"utf-8" ,function(err,filedata){
        res.render("show", {filename : req.params.filename , filedata : filedata} )
        
    })
})

app.get('/edit/:filename',function(req,res){
    fs.readFile(`./files/${req.params.filename}` , "utf-8" , function(err,filedata){
        res.render("edit", {filename : req.params.filename ,filedata :  filedata})
    })
})


app.post("/edit",function(req,res){
    const oldpath = `./files/${req.body.previous}`
    const newpath = `./files/${req.body.new}`



    fs.rename(oldpath , newpath,function(err){

        if (err) {
            console.error("Rename failed:", err);
            return res.status(500).send("File rename error");
        }


        fs.writeFile(newpath, req.body.newdetails, function(err){

            if (err) {
                console.error("Append failed:", err);
                return res.status(500).send("File write error");
            }


            res.redirect("/")
        });
    });
})

app.post("/create",function(req,res){
    fs.writeFile(`./files/${req.body.title.split(" ").join('')}.txt`, req.body.details ,function(err){
        res.redirect("/");
    })
})



app.listen(3000,function(){
    console.log("It's running");
})