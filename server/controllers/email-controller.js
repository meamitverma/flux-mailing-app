const { request } = require('express');
const Email = require('../model/email.js')

const saveSentEmails = (req, res) => {
    try {
        const email = new Email(req.body);
        email.save();

        res.status(200).json('Email saved successfully!');
    }
    catch (error) {
        res.status(500).json(error.message);
    }
}

const getEmails = async (req, res) => {
    try {
        let emails;
        if (req.params.type === 'sent') {
            emails = await Email.find({ type: req.params.type })
        }

        return res.status(200).json(emails)
    }
    catch (error) {
        res.status(500).json(error.message);
    }
}



module.exports = {saveSentEmails, getEmails}