const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET feedback
router.get('/', (req, res) => {
    let queryText = 'SELECT feeling, understanding, support, comments FROM "feedback";';
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /feedback', error)
        res.sendStatus(500);
    });
})

// POST feedback
router.post('/', (req, res) => {
    // store req.body into variable to utilize query
    let newFeed = req.body;
    console.log(`Adding feedback`, newFeed);
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments" )
    VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [newFeed.feeling, newFeed.understanding, newFeed.support, newFeed.comments])
    .then((results) => {
        res.sendStatus(201);
    })
    .catch(error => {
        console.log(`Error adding new feedback`, error);
        res.sendStatus(500);
    });
});


module.exports = router;