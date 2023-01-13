const nbaGames = [{
    awayTeam: {
        team: 'Golden State',
        points: 119,
        isWinner: true
    },
    homeTeam: {
        team: 'Houston',
        points: 106,
        isWinner: false
    }
},
{
    awayTeam: {
        team: 'Golden State',
        points: 105,
        isWinner: false
    },
    homeTeam: {
        team: 'Houston',
        points: 127,
        isWinner: true
    }
},
{
    homeTeam: {
        team: 'Golden State',
        points: 126,
        isWinner: true
    },
    awayTeam: {
        team: 'Houston',
        points: 85,
        isWinner: false
    }
},
{
    homeTeam: {
        team: 'Golden State',
        points: 92,
        isWinner: false
    },
    awayTeam: {
        team: 'Houston',
        points: 95,
        isWinner: true
    }
},
{
    awayTeam: {
        team: 'Golden State',
        points: 94,
        isWinner: false
    },
    homeTeam: {
        team: 'Houston',
        points: 98,
        isWinner: true
    }
},
{
    homeTeam: {
        team: 'Golden State',
        points: 115,
        isWinner: true
    },
    awayTeam: {
        team: 'Houston',
        points: 86,
        isWinner: false
    }
},
{
    awayTeam: {
        team: 'Golden State',
        points: 101,
        isWinner: true
    },
    homeTeam: {
        team: 'Houston',
        points: 92,
        isWinner: false
    }
}
]
const makeChart = (games, targetTeam) => {
    const ulParent = document.createElement('ul')
    for (let game of games) {
        // destructor
        const gameLi = document.createElement('li')
        gameLi.innerHTML = getScoreLine(game) // value for the games
        gameLi.classList.add(isWinner(game, targetTeam) ?'win':'loss')
        console.log(games)
        ulParent.appendChild(gameLi)

    }
    return ulParent
}
const isWinner = ({ homeTeam, awayTeam }, targetTeam) => {
    const nbaGames = homeTeam.team === targetTeam ? homeTeam : awayTeam // ternary operator
    //    if (hTeam === 'Golden State') {
    //     warriors = homeTeam;
    //   } else {
    //     warriors = awayTeam;
    //   }
    // warriors.isWinner?'win':'loss' // ternary operator
    // if(warriors.isWinner){
    //     return 'win'
    // }else{
    //     return 'loss'
    // }
    return nbaGames.isWinner

}

const getScoreLine = ({ homeTeam, awayTeam }) => {
    const {
        team: hTeam,
        points: hPoints
    } = homeTeam
    const {
        team: aTeam,
        points: aPoints
    } = awayTeam
    const teamNames = `${aTeam} @ ${hTeam}`
    let scoreLine
    if (aPoints > hPoints) {
        scoreLine = `<b>${aPoints}</b> - ${hPoints}`
    } else {
        scoreLine = `${aPoints} - <b>${hPoints} </b>`
    }
    return `${teamNames} ${scoreLine}`
}

const chart1 = makeChart(nbaGames, 'Houston')
document.body.prepend(chart1)

