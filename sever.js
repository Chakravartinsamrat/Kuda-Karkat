const express = require("express");
const multer = require("multer")
const fs = require("fs")

const app = express()
const port = 3000;

const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        const uploadPath = 'C:/Users/piyus/Documents/GitHub/MERN';
        if(!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath, {recursive:true});
        cb(null, uploadPath)
    },
    filename:(req, file, cb)=>{
        cb(null, file.originalname)
    }
})

const upload = multer({storage})

app.post("/upload", upload.single("file"), (req, res) => {
    console.log(` File received: ${req.file.originalname}`);
    res.status(200).json({ message: "File uploaded successfully", file: req.file });
});
app.get("/", (req, res)=>{
    console.log("working");
    res.json({message:"working"})
})


app.listen(port, () => {
    console.log(`Node storage running at http://localhost:${port}`);
});