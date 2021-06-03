var mongoose = require('mongoose');

// schema
var playerSchema = mongoose.Schema({
    name: {
        first: {
            type: String,
            required: true
        },
        last: {
            type: String,
            required: true
        }
    },
    birth: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    characteristics: {
        height: {
            type: String,
            required: true
        },
        weight: {
            type: Number,
            required: true
        }
    },
    position: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    uniformNumber: {
        type: Number,
        required: true
    },
    teamRankOverall: {
        type: Number,
        required: true
    },
    games: {
        played: {
            type: Number,
            required: true
        },
        started: {
            type: Number,
            required: true
        },
        minutesPerGame: {
            type: Number,
            required: true
        }
    },
    fieldGoalsOverall: {
        goalsMade: {
            type: Number,
            required: true
        },
        goalAttempts: {
            type: Number,
            required: true
        },
        goalPercentage: {
            type: Number,
            required: true
        },
        pointsPerGame: {
            type: Number,
            required: true
        }
    },
    fieldTwo: {
        twoPointMade: {
            type: Number,
            required: true
        },
        twoPointAttempts: {
            type: Number,
            required: true
        },
        twoPointPercentage: {
            type: Number,
            required: true
        }
    },
    fieldThree: {
        threePointMade: {
            type: Number,
            required: true
        },
        threePointAttempts: {
            type: Number,
            required: true
        },
        threePointPercentage: {
            type: Number,
            required: true
        }
    },
    freeThrow: {
        freePointMade: {
            type: Number,
            required: true
        },
        freePointAttempts: {
            type: Number,
            required: true
        },
        freePointPercentage: {
            type: Number,
            required: true
        }
    },
    floor: {
        rebounds: {
            offense: {
                type: Number,
                required: true
            },
            defense: {
                type: Number,
                required: true
            },
            totalPerGame: {
                type: Number,
                required: true
            }
        },
        assists: {
            type: Number,
            required: true
        },
        steals: {
            type: Number,
            required: true
        },
        blocks: {
            type: Number,
            required: true
        },
        turnovers: {
            type: Number,
            required: true
        },
        fouls: {
            type: Number,
            required: true
        }
    },
});

var Player = module.exports = mongoose.model('playersProfile', playerSchema, 'players_per_game_stats');

module.exports.getFullProfile = function (callback, limit) {
    Player.find(callback).limit(limit);
}

module.exports.getLimitedProfile = function (callback, limit) {
    Player.find(callback).select({ _id: 1, "name": 1, "teamRankOverall": 1 }).sort({ "teamRankOverall": 1 });
}

module.exports.getQueryOne = function (callback, limit) {
    Player.find(callback).find().sort({ "fieldGoalsOverall.pointsPerGame": -1 }).limit(1);
}

module.exports.getQueryTwo = function (callback, limit) {
    Player.find(callback).select({ _id: 0, "name": 1, "freeThrow": 1 }).sort({ "freeThrow.freePointPercentage": 1 }).limit(3);
}

module.exports.getQueryThree = function (callback, limit) {
    Player.find(callback).find({ "experience": { $gte: 5 } }).select({
        _id: 0, "name": 1, "birth": 1, "age": 1, "characteristics": 1, "experience": 1
    }).sort({ "experience": 1 });
}

module.exports.getQueryFour = function (callback, limit) {
    Player.find(callback).find({
        $and: [{ "fieldTwo.twoPointPercentage": { $gt: 0.600 } }, {
            "fieldThree.threePointPercentage": { $gt: 0.300 }
        }]
    }).select({ _id: 0, "name": 1, "fieldThree": 1, "fieldTwo": 1 })
}

module.exports.getQueryFive = function (callback, limit) {
    Player.find(callback).find({
        $and: [{ $or: [{ "position": "C" }, { "position": "PF" }] }, { "name.first": { $ne: "Giannis" } }]
    }).select({ "name": 1, "position": 1, _id: 0, "floor.fouls": 1 }).sort({ "floor.fouls": -1 })
}