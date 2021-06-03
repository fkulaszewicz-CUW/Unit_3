var mongoose = require('mongoose');

// schema for "PUT"
var playerSchema = mongoose.Schema({
    name: {
        first: {
            type: String
        },
        last: {
            type: String
        }
    },
    birth: {
        type: String
    },
    age: {
        type: Number
    },
    characteristics: {
        height: {
            type: String
        },
        weight: {
            type: Number
        }
    },
    position: {
        type: String
    },
    experience: {
        type: Number
    },
    uniformNumber: {
        type: Number
    },
    teamRankOverall: {
        type: Number
    },
    games: {
        played: {
            type: Number
        },
        started: {
            type: Number
        },
        minutesPerGame: {
            type: Number
        }
    },
    fieldGoalsOverall: {
        goalsMade: {
            type: Number
        },
        goalAttempts: {
            type: Number
        },
        goalPercentage: {
            type: Number
        },
        pointsPerGame: {
            type: Number
        }
    },
    fieldTwo: {
        twoPointMade: {
            type: Number
        },
        twoPointAttempts: {
            type: Number
        },
        twoPointPercentage: {
            type: Number
        }
    },
    fieldThree: {
        threePointMade: {
            type: Number
        },
        threePointAttempts: {
            type: Number
        },
        threePointPercentage: {
            type: Number
        }
    },
    freeThrow: {
        freePointMade: {
            type: Number
        },
        freePointAttempts: {
            type: Number
        },
        freePointPercentage: {
            type: Number
        }
    },
    floor: {
        rebounds: {
            offense: {
                type: Number
            },
            defense: {
                type: Number
            },
            totalPerGame: {
                type: Number
            }
        },
        assists: {
            type: Number
        },
        steals: {
            type: Number
        },
        blocks: {
            type: Number
        },
        turnovers: {
            type: Number
        },
        fouls: {
            type: Number
        }
    },
});

var PlayerUpdate = module.exports = mongoose.model('playersProfileUpdate', playerSchema, 'players_per_game_stats');

module.exports.getFullProfile = function (callback, limit) { 
    PlayerUpdate.find(callback).limit(limit);
}