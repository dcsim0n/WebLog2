/**
|--------------------------------------------------
| /admin Routes File
|--------------------------------------------------
*/

const express = require('express');
const router = express.Router();

const { adminPage, createField } = require('../controllers/adminController');

/* /admin routes */

router.get('/admin', adminPage );
router.post('/field', createField );
module.exports = router;