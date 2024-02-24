const express = require('express');
const router = express.Router();
const helmet = require('helmet');
const { User, Form } = require('../models');

router.use(helmet());

router.get('/', async (req, res) => {
  try {
    // Get all users, sorted by name
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    // Serialize user data so templates can read it
    const users = userData.map((project) => project.get({ plain: true }));

    // Pass serialized data into Handlebars.js template
    res.render('homepage', { users });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/submit-rsvp', async (req, res) => {
  try {
    // Get all users, sorted by name
    res.render('rsvpForm');
  } catch (err) {
    console.log(err); 
    res.status(500).json(err);
  }
});
     
router.post('/edit-rsvp', async (req, res) => {
  try {
    const formData = req.body;
    console.log('Form Data:', formData); // Log form data
    const newForm = await Form.create({
      ...formData,
    });

    console.log('Form submitted successfully');
    res.render('editrsvpForm', { newForm });
  } catch (err) {
    console.error('Form submission error:', err);
    res.status(500).json({ error: err.message });
  }
});

//router.put update-rsvp
//action of the rsvp form should have the id of the form you want to edit.

module.exports = router;
