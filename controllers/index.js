const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const formRoutes = require('./formRoutes');

router.use('/', homeRoutes);
router.use('/form', formRoutes);

module.exports = router;
