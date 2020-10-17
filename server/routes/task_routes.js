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
        res.sendStatus(500);
    })
})

//POST
router.post('/', (req, res)=>{
    let task = req.body;
    let queryText = `INSERT INTO "tasks"("name", "description")
    VALUES($1, $2);`
    pool.query(queryText, [task.name, task.description])
            .then(()=>{
                res.sendStatus(200);
            }).catch((err)=>{
                console.log('error from POST pg', err);
                res.sendStatus(500);
            })
})

//PUT
router.put('/', (req, res)=>{
    
})

//DELETe
router.delete('/', (req, res)=>{
    
})

module.exports = router;