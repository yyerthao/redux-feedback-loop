const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const feedback = require('../modules/feed.data.js');


// POST feedback
router.post('/', (req, res) => {
    console.log(`Adding feedback`, newFeed);
    const newFeed = req.body;
    // add id to incoming feedback object
    newFeed.id = nextId;
    nextId += 1;
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments" )
    VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [newFeed.feeling, newFeed.understanding, newFeed.support, newFeed.comments])
    .then(result => {
        res.sendStatus(201);
    })
    .catch(error => {
        console.log(`Error adding new feedback`, error);
        res.sendStatus(500);
    });
});

// GET feedback
router.get('/', (req, res) => {
    console.log('GET /feedback');
    pool.query('SELECT * from "feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /feedback', error)
        res.sendStatus(500);
    });
})

module.exports = router;