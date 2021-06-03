let router = require('express').Router();

// set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Test Successful',
        message: 'Root Endpoint is Working'
    });
});

// controls the data sent and requested
var playerController = require('./playerController');

// testing route
router.route('/playerProfileLimited')
    .get(playerController.getLimitedPlayerProfile)

// get and create full player profile
router.route('/playerProfile')
    .get(playerController.getFullPlayerProfile)
    .post(playerController.addPlayer)

// get, update and delete a profile based on id
router.route('/playerProfile/byID/:player_id')
    .get(playerController.playerProfileByID)
    .put(playerController.updatePlayerProfile)
    .delete(playerController.delete)

// get the queries from HW2
router.route('/queryOne')
    .get(playerController.getQueryOne)

router.route('/queryTwo')
    .get(playerController.getQueryTwo)

router.route('/queryThree')
    .get(playerController.getQueryThree)

router.route('/queryFour')
    .get(playerController.getQueryFour)

router.route('/queryFive')
    .get(playerController.getQueryFive)

module.exports = router;