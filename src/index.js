// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
// import mongoose from "mongoose";
import { db_name } from "./constants.js";
// import express from 'express';
import connectDb from "./db/index.js";
dotenv.config({
    path:'./env'
})
// const app=express()

connectDb()
.then(()=>{
    app.on("error",(error)=>{
        console.log("error: ",error)
        throw error
    })
    app.listen(process.env.PORT || 8000),()=>{
        console.log(`server is running at port: ${process.env.PORT}`)
    }
})
.catch((err)=>{
    console.log("mongodb connection failed", err);
    
})







/*
;(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`)
        app.on("error",(error)=>{
            console.log("error: ",error)
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`app is listening on port ${process.env.PORT}`)
        })
        
    } catch (error) {
        console.log("error:",error)
        throw error
    }

})()
    */