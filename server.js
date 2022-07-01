

import express from "express";
import database from "./database";

// const express = require('express');
// const database = require('./database')

const app = express();

app.get('/listUser', (req,res) => {
    database.getAllUser((callbackQuery) =>{
        res.json(callbackQuery);
    });
});

app.listen(3000);