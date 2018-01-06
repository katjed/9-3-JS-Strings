var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.'

var dinosaur = 'triceratops';

var dinosaurUpperCased = dinosaur.toUpperCase();
console.log(dinosaurUpperCased);

var textGenusName = text.replace('Velociraptor', dinosaurUpperCased);
console.log(textGenusName);

console.log(textGenusName.length/2)

var halfOfTextGenusName = textGenusName.slice(0, textGenusName.length/2);
console.log(halfOfTextGenusName); 

