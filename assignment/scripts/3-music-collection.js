console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

myCollection = [];
console.log(myCollection);

function addToCollection(collection, title, artist, yearPublished) {
let album = {

 Title: title,
 artist: artist,
 yearPublished: yearPublished,
  };
  collection.push(album);
  return album;
}

console.log("adding albums into collection.");
console.log(addToCollection(myCollection,'Chilombo', 'Jhene Aiko', 2020));
console.log(addToCollection(myCollection,'I Used to Know Her', 'H.E.R', 2019));
console.log(addToCollection(myCollection,'SOS', 'SZA', 2022));
console.log(addToCollection(myCollection,'Channel ORANGE', 'Frank Ocean', 2012));
console.log(addToCollection(myCollection,'Freudian', 'Daniel Caesar', 2017));
console.log(addToCollection(myCollection,'Over it', 'Summer Walker', 2020));
console.log("myCollection:,added new albums into the collection");

function showCollection(collection) {
  for(let i = 0; i < collection.length; i++) {
    let album = collection[i];
  console.log("${collection[i].title}by ${collection[i].artist}, published ${collection[i].yearPublished}");
  }
}
console.log("show collection");
showCollection(myCollection);

function findByArtist(collection, artist) {
  let results = [];
for(let i = 0; i < collection.length; i++) {
  if  (collection.artist == findByArtist) {
    results.push(collection);
  }
  }
  return results;
}

console.log(findByArtist(myCollection,'Sza'),"expect 1 result from search:", findByArtist);
console.log(findByArtist(myCollection,'Jhene Aiko' ),"expect 1 result from search:", findByArtist);
console.log(findByArtist(myCollection,'Frank Ocean'),"expect 1 result from search:", findByArtist);
console.log(findByArtist(myCollection,'Daniel Caesar'),"expect 1 result from search:", findByArtist);
console.log(findByArtist(myCollection,'H.E.R'),"expect 1 result from search:", findByArtist);

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
