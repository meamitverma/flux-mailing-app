const express = require('express')
const { saveSentEmails } = require('../controllers/email-controller.js')

const routes = express.Router();

routes.post('/save', saveSentEmails)

module.exports = routes