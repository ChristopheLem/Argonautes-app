const express = require('express');
const router = express.Router();

const memberCtr = require('../controllers/member');

router.get('/', memberCtr.getMembers);
router.post('/', memberCtr.addMember);

module.exports = router;