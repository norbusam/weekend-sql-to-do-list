const express = require('express');
const router = express.Router();

const pool = require('../modules/pool')

//GET
router.get('/', (req, res)=>{
    let queryText = `SELECT * FROM "tasks";`;
    pool.query(queryText).then((result)=>{
        console.log('back from DB', result.rows);
        res.send(result.rows)
    }).catch((err)=>{
        console.log('error in DB get', err);
    })
})

//POST
router.post('/', (req, res)=>{
    // let queryText
    
})

//PUT
router.put('/', (req, res)=>{
    
})

//DELETe
router.delete('/', (req, res)=>{
    
})

module.exports = router;