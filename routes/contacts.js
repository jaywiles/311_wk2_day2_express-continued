const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts.js');

router.get('/contacts', contactsController.list);

router.get('/contacts/:id', contactsController.show);

router.get('/contacts', contactsController.create);

module.exports = router;