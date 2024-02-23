// routes/formRoutes.js
const express = require('express');
const router = express.Router();
const { Form } = require('../models');

router.post('/submit-rsvp', async (req, res) => {
  try {
    const formData = req.body;
    const newForm = await Form.create({
      ...formData,
    });

    console.log('Form submitted successfully');
    res.send('Form submitted successfully');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
