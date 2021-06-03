

Player = require('./documentSchema');

// used for updating profile, prevents needing all fields to be required
PlayerUpdate = require('./documentSchemaUpdate');

exports.getFullPlayerProfile = function (req, res) {
    Player.getFullProfile(function (err, player) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "Got Player Profiles Successfully!",
            data: player
        });
    });
};

exports.getLimitedPlayerProfile = function (req, res) {
    Player.getLimitedProfile(function (err, player) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "Got Limited Player Profiles Successfully!",
            data: player
        });
    });
};

// For creating new Player Profile
exports.addPlayer = function (req, res) {
    var player = new Player();
    player.name.first = req.body.first;
    player.name.last = req.body.last;
    player.birth = req.body.birth;
    player.age = req.body.age;
    player.characteristics.height = req.body.height;
    player.characteristics.weight = req.body.weight;
    player.position = req.body.position;
    player.experience = req.body.experience;
    player.uniformNumber = req.body.uniformNumber;
    player.teamRankOverall = req.body.teamRankOverall;
    player.games.played = req.body.gamesPlayed;
    player.games.started = req.body.gamesStarted;
    player.games.minutesPerGame = req.body.minutesPlayedPerGame;
    player.fieldGoalsOverall.goalsMade = req.body.overallGoalsMade;
    player.fieldGoalsOverall.goalAttempts = req.body.overallGoalAttempts;
    player.fieldGoalsOverall.goalPercentage = req.body.overallGoalPercentage;
    player.fieldGoalsOverall.pointsPerGame = req.body.averagePointsPerGame;
    player.fieldTwo.twoPointMade = req.body.twoPointMade;
    player.fieldTwo.twoPointAttempts = req.body.twoPointAttempts;
    player.fieldTwo.twoPointPercentage = req.body.twoPointPercentage;
    player.fieldThree.threePointMade = req.body.threePointMade;
    player.fieldThree.threePointAttempts = req.body.threePointAttempts;
    player.fieldThree.threePointPercentage = req.body.threePointPercentage;
    player.freeThrow.freePointMade = req.body.freePointMade;
    player.freeThrow.freePointAttempts = req.body.freePointAttempts;
    player.freeThrow.freePointPercentage = req.body.freePointPercentage;
    player.floor.rebounds.offense = req.body.reboundsOffense;
    player.floor.rebounds.defense = req.body.reboundsDefense;
    player.floor.rebounds.totalPerGame = req.body.totalReboundsPerGame;
    player.floor.assists = req.body.assists;
    player.floor.steals = req.body.steals;
    player.floor.blocks = req.body.blocks;
    player.floor.turnovers = req.body.turnovers;
    player.floor.fouls = req.body.fouls;

    player.save(function (err) {
        if (err)
            res.json(err);

        res.json({
            message: "New Player Profile Added!",
            data: player
        });
    });
};

exports.playerProfileByID = function (req, res) {
    Player.findById(req.params.player_id, function (err, player) {
        if (err)
            res.send(err);
        res.json({
            message: 'Player Profile',
            data: player
        });
    });
};

// for updating profile, if new value is not set use current by default
exports.updatePlayerProfile = function (req, res) {
    PlayerUpdate.findById(req.params.player_id, function (err, player) {
        if (err)
            res.send(err);
        player.name.first = req.body.first ? req.body.first : player.name.first;
        player.name.last = req.body.last ? req.body.last : player.name.last;
        player.birth = req.body.birth ? req.body.birth : player.birth;
        player.age = req.body.age ? req.body.age : player.age;
        player.characteristics.height = req.body.height ? req.body.height : player.characteristics.height;
        player.characteristics.weight = req.body.weight ? req.body.weight : player.characteristics.weight;
        player.position = req.body.position ? req.body.position : player.position;
        player.experience = req.body.experience ? req.body.experience : player.experience;
        player.uniformNumber = req.body.uniformNumber ? req.body.uniformNumber : player.uniformNumber;
        player.teamRankOverall = req.body.teamRankOverall ? req.body.teamRankOverall : player.teamRankOverall;
        player.games.played = req.body.gamesPlayed ? req.body.gamesPlayed : player.games.played;
        player.games.started = req.body.gamesStarted ? req.body.gamesStarted : player.games.started;
        player.games.minutesPerGame = req.body.minutesPlayedPerGame ? req.body.minutesPlayedPerGame : player.games.minutesPerGame;
        player.fieldGoalsOverall.goalsMade = req.body.overallGoalsMade ? req.body.overallGoalsMade : player.fieldGoalsOverall.goalsMade;
        player.fieldGoalsOverall.goalAttempts = req.body.overallGoalAttempts ? req.body.overallGoalAttempts : player.fieldGoalsOverall.goalAttempts;
        player.fieldGoalsOverall.goalPercentage = req.body.overallGoalPercentage ? req.body.overallGoalPercentage : player.fieldGoalsOverall.goalPercentage;
        player.fieldGoalsOverall.pointsPerGame = req.body.averagePointsPerGame ? req.body.averagePointsPerGame : player.fieldGoalsOverall.pointsPerGame;
        player.fieldTwo.twoPointMade = req.body.twoPointMade ? req.body.twoPointMade : player.fieldTwo.twoPointMade;
        player.fieldTwo.twoPointAttempts = req.body.twoPointAttempts ? req.body.twoPointAttempts : player.fieldTwo.twoPointAttempts;
        player.fieldTwo.twoPointPercentage = req.body.twoPointPercentage ? req.body.twoPointPercentage : player.fieldTwo.twoPointPercentage;
        player.fieldThree.threePointMade = req.body.threePointMade ? req.body.threePointMade : player.fieldThree.threePointMade;
        player.fieldThree.threePointAttempts = req.body.threePointAttempts ? req.body.threePointAttempts : player.fieldThree.threePointAttempts;
        player.fieldThree.threePointPercentage = req.body.threePointPercentage ? req.body.threePointPercentage : player.fieldThree.threePointPercentage;
        player.freeThrow.freePointMade = req.body.freePointMade ? req.body.freePointMade : player.freeThrow.freePointMade;
        player.freeThrow.freePointAttempts = req.body.freePointAttempts ? req.body.freePointAttempts : player.freeThrow.freePointAttempts;
        player.freeThrow.freePointPercentage = req.body.freePointPercentage ? req.body.freePointPercentage : player.freeThrow.freePointPercentage;
        player.floor.rebounds.offense = req.body.reboundsOffense ? req.body.reboundsOffense : player.floor.rebounds.offense;
        player.floor.rebounds.defense = req.body.reboundsDefense ? req.body.reboundsDefense : player.floor.rebounds.defense;
        player.floor.rebounds.totalPerGame = req.body.totalReboundsPerGame ? req.body.totalReboundsPerGame : player.floor.rebounds.totalPerGame;
        player.floor.assists = req.body.assists ? req.body.assists : player.floor.assists;
        player.floor.steals = req.body.steals ? req.body.steals : player.floor.steals;
        player.floor.blocks = req.body.blocks ? req.body.blocks : player.floor.blocks;
        player.floor.turnovers = req.body.turnovers ? req.body.turnovers : player.floor.turnovers;
        player.floor.fouls = req.body.fouls ? req.body.fouls : player.floor.fouls;

        player.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "Player Profile Updated Successfully",
                data: player
            });
        });
    });
};

// Delete Player Profile
exports.delete = function (req, res) {
    Player.deleteOne({
        _id: req.params.player_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Player Profile Deleted!'
        });
    });
};

exports.getQueryOne = function (req, res) {
    Player.getQueryOne(function (err, player) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "Got Query 1 Successfully!",
            data: player
        });
    });
};

exports.getQueryTwo = function (req, res) {
    Player.getQueryTwo(function (err, player) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "Got Query 2 Successfully!",
            data: player
        });
    });
};

exports.getQueryThree = function (req, res) {
    Player.getQueryThree(function (err, player) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "Got Query 3 Successfully!",
            data: player
        });
    });
};

exports.getQueryFour = function (req, res) {
    Player.getQueryFour(function (err, player) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "Got Query 4 Successfully!",
            data: player
        });
    });
};

exports.getQueryFive = function (req, res) {
    Player.getQueryFive(function (err, player) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "Got Query 5 Successfully!",
            data: player
        });
    });
};