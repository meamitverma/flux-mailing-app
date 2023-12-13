const express = require('express')
const { saveSentEmails, getEmails, moveEmailsToBin, toggleStarredEmails } = require('../controllers/email-controller.js')

const routes = express.Router();

routes.post('/save', saveSentEmails)
routes.get('/emails/:type', getEmails)
routes.post('/save-draft', saveSentEmails);
routes.post('/bin', moveEmailsToBin);
routes.post('/starred', toggleStarredEmails);

module.exports = routes