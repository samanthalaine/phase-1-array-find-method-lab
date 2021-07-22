function superbowlWin(record){
    const foundSeason = record.find(season => season.result === 'W')
    if (foundSeason){
        return foundSeason.year
    }
}

function WinChecker(season){
    return season.result === "W"
}
