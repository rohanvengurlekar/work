let ladies = ["Elise", "Mary"]
let gentlemen = ["John", "Rick"]

var doubleDate = ladies.map(function(lady, i) {
  return [lady, gentlemen[i]];
});

console.log(doubleDate)