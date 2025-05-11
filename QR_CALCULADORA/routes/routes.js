const express = require('express');
const router = express.Router();
const path= require('path');

//definimos las rutas y los manejadores


router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"/../html/index.html"));
});

router.get("/qr",(req,res)=>{
    res.sendFile(path.join(__dirname+"/../html/qr.html"));
});

router.get("/calculadora",(req,res)=>{
    res.sendFile(path.join(__dirname+"/../html/calculadora.html"));
});

module.exports = router;