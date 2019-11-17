/**
|--------------------------------------------------
| Index routes 
| Dana Simmons 2019
|--------------------------------------------------
*/

const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
/* GET home page. */
router.get('/', contactController.allContacts );
router.post('/contacts', contactController.createContact );

module.exports = router;
