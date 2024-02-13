const router = require('express').Router();

router.get('/', async (req, res) => {
  try{
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });
    const users = userData.map((user) => user.get({ plain: true }));
    //res.status(200).json(users);
    console.log("GET /api/users");
    return res.render('homepage', { layout: 'main' , users : users
  // TODO: Render template with Sequelize data
  res.render('homepage', { users });
});
});

module.exports = router;
