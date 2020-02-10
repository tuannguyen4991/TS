import * as fs from 'fs';

const matches = fs
  .readFileSync(`${__dirname}/../football.csv`, {encoding: 'utf8'})
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
};

const teamName = 'Chelsea';

let manUnitedWins = 0;
for(let match of matches) {
  match[1] === teamName && match[5] === MatchResult.HomeWin ? manUnitedWins += 1 :
    (match[2] === teamName && match[5] === MatchResult.AwayWin ? manUnitedWins += 1 : '')
}
const filterMatch = matches.filter(x => (x[1] === teamName && x[5] === MatchResult.HomeWin) || (x[2] === teamName && x[5] === MatchResult.AwayWin));
const firstElement = `${teamName} won ${manUnitedWins} games \n`;
const arr = firstElement + filterMatch.join('\n');
const writeMatches = fs.writeFileSync(`${__dirname}/../filterMatches.csv`, arr, {encoding: 'utf8'})