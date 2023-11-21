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
        if (req.params.type == 'bin') {
            emails = await Email.find({ bin: true })
        }
        else if (req.params.type == 'allmail') {
            emails = await Email.find({ })
        }
        else {
            emails = await Email.find({ type: req.params.type })
        }

        return res.status(200).json(emails)
    }
    catch (error) {
        res.status(500).json(error.message);
    }
}

const moveEmailsToBin = async (req, res) => {
    try {
        await Email.updateMany({ _id: { $in: req.body }}, { $set: {bin: true, starred: false, type: ''} })

        return res.status(200).json('emails deleted successfully')
    }
    catch (e) {
        console.log(e)
        response.status(500).json(e.message);
    }
}

module.exports = {saveSentEmails, getEmails, moveEmailsToBin}