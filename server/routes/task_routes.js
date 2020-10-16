const express = require('express');
const router = express.Router();

const pool = require('../modules/pool')

//GET
router.get('/', (req, res)=>{
    console.log('in server GET');
    res.sendStatus(200)
})

//POST
router.post('/', (req, res)=>{
    console.log('POST ROUTE');
    res.sendStatus(200);
})

//PUT
router.put('/', (req, res)=>{
    
})

//DELETe
router.delete('/', (req, res)=>{
    
})

module.exports = router;