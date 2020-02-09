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

let manUnitedWins = 0;
for(let match of matches) {
  match[1] === 'Man United' && match[5] === MatchResult.HomeWin ? manUnitedWins += 1 :
    (match[2] === 'Man United' && match[5] === MatchResult.AwayWin ? manUnitedWins += 1 : '')
}

console.log(`Man United won ${manUnitedWins} games`);