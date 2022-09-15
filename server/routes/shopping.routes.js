const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET shopping list
router.get('/', (req, res) => {
    // Get all of the items from the database
    const sqlText = `SELECT * FROM list`;
    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});

// POST a new item
router.post('/', (req, res) => {
    const sqlText = `INSERT INTO list 
                        ("name", "quantity", "units") 
                        VALUES 
                        ($1, $2, $3)`;

    pool.query(sqlText, [req.body.name, req.body.quantity, req.body.units])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});


// DELETE Item
router.delete('/:id', (req, res) => {
    const deleteId = req.params.id;
    const sqlText = `DELETE FROM list
                        WHERE "id" = $1`;
    
    pool.query(sqlText, [deleteId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('Error deleting item', error);
            res.sendStatus(500);
        })
});

// DELETE everything
router.delete('/', (req, res) => {
    const sqlText = `DELETE FROM list;`
    
    pool.query(sqlText)
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('Error deleting items', error);
            res.sendStatus(500);
        })
});


// PUT purchase status // DO WE NEED SEPARATE ROUTER FILES ?????
router.put('/:id', (req, res) => {
    const updateId = req.params.id;
    const sqlText = `UPDATE list
                        "purchased" != "purchased"
                        WHERE "id" = $1;`

        pool.query(sqlText, [updateId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('Error resetting purchase status', error);
            res.sendStatus(500);
        })
});



// PUT reset purchase status
router.put('/', (req, res) => {
    const sqlText = `UPDATE list
                        "purchased" != "purchased"
                        WHERE "purchased" = true;`

        pool.query(sqlText)
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('Error resetting purchase status', error);
            res.sendStatus(500);
        })
});





module.exports = router;