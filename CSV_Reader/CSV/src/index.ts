// import * as fs from 'fs';
import {CsvFileReader} from './CsvFileReader';
import {MatchReader} from './MatchReader';
import {MatchResult} from './MatchResult';

// const matches = fs
//   .readFileSync(`${__dirname}/../football.csv`, {encoding: 'utf8'})
//   .split('\n')
//   .map((row: string): string[] => {
//     return row.split(',');
//   });

const teamName = 'Man United';

const matchReader = new MatchReader(`${__dirname}/../football.csv`);
matchReader.read();

const teamName = 'Chelsea';

let manUnitedWins = 0;
for(let match of matchReader.data) {
  match[1] === teamName && match[5] === MatchResult.HomeWin ? manUnitedWins += 1 :
    (match[2] === teamName && match[5] === MatchResult.AwayWin ? manUnitedWins += 1 : '')
}

console.log(`Man United won ${manUnitedWins} games`);

// const filterMatch = matches.filter(x => (x[1] === teamName && x[5] === MatchResult.HomeWin) || (x[2] === teamName && x[5] === MatchResult.AwayWin));
// const firstElement = `${teamName} won ${manUnitedWins} games \n`;
// const arr = firstElement + filterMatch.join('\n');
// const writeMatches = fs.writeFileSync(`${__dirname}/../${teamName}.csv`, arr, {encoding: 'utf8'})

// var a = '10/08/2018'.split('/').map(val => {
//   // console.log(val);
//   return parseInt(val);
// });

// console.log(a);
// var date = new Date(Date.UTC(a[2], a[1] - 1, a[0]));
// console.log(date);