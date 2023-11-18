const express = require('express')
const { saveSentEmails, getEmails } = require('../controllers/email-controller.js')

const routes = express.Router();

routes.post('/save', saveSentEmails)
routes.get('/emails/:type', getEmails)
routes.post('/save-draft', saveSentEmails);

module.exports = routes