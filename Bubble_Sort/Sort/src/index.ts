import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([-2, 10, 4, 6, 15]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Xaayycb');
charactersCollection.sort();
console.log(charactersCollection.data);
