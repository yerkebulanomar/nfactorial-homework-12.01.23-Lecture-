console.log('Part 1')

const WASHINGTON_CAPITALS = {
    name: 'Washington Capitals',
    city: 'Washington',
    stadiumCapacity: 20144,
    isStanleyCupChamp: false,
    playoffResult: undefined,
    topScorers: {
        player1: 'Alex Ovechkin',
        player2: 'Nick Backstrom',
        player3: 'Evgeni Kuznetsov'
    }
}
WASHINGTON_CAPITALS.coach = 'Peter Laviolette';
delete WASHINGTON_CAPITALS['playoffRanking'];
console.log(WASHINGTON_CAPITALS);
let playoffRanking = null;
console.log('Playoff ranking of this season is', playoffRanking);