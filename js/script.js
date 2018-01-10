/*
var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.'

var dinosaur = 'triceratops';

var dinosaurUpperCased = dinosaur.toUpperCase();
console.log(dinosaurUpperCased);

var textCorrect = text.replace('Velociraptor', dinosaurUpperCased);
console.log(textCorrect);

console.log(textCorrect.length/2)

var halfOfTextCorrect = textCorrect.slice(0, textCorrect.length/2);
console.log(halfOfTextCorrect); 
*/

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.',
    dinosaurUpperCased = 'triceratops'.toUpperCase(),
    textCorrect = text.replace('Velociraptor', dinosaurUpperCased),
    halfOfTextCorrect = textCorrect.slice(0, textCorrect.length/2);

console.log(halfOfTextCorrect); 