let animals= ["Aardvark","Albatross","Alligator","Alpaca","Ant","Ape","Armadillo",
    "Baboon","Badger","Barracuda","Bat","Bear","Beaver","Bee","Bison",
    "Cat","Caterpillar","Cattle","Chamois","Cheetah","Chicken","Chimpanzee","Chinchilla","Chough","Clam","Cobra","Cockroach","Cod","Cormorant",
    "Dugong","Dunlin","Donkey",
    "Eagle","Echidna","Eel","Eland","Elephant","Elk","Emu",
    "Falcon","Ferret","Finch","Fish","Flamingo","Fly","Fox","Frog",
    "Gaur", "Gazelle","Gerbil","Giraffe","Grasshopper",
    "Heron","Herring","Hippopotamus","Hornet","Horse",
    "Kangaroo","Kingfisher","Koala","Kookabura",
    "Moose",
    "Narwhal","Newt","Nightingale",
    "Octopus","Okapi","Opossum", 
    "Quail","Quelea","Quetzal",
    "Rabbit", "Raccoon","Rail","Ram","Rat","Raven","Red deer",
    "Sandpiper","Sardine","Sparrow","Spider","Spoonbill","Squid","Squirrel","Starling","Stingray",
    "Tiger","Toad",
    "Whale","Wildcat","Wolf","Worm","Wren",
    "Yak",
    "Zebra"
]

console.log(animals.length)

animals.pop
console.log(animals)

animals.push("dog")

animals.push("Mosquito","mouse","mule")

console.log(animals.includes("Human"))
console.log(animals.includes("Cat"))

console.log(animals)

animals[animals.indexOf("Red deer")] = "Deer"
//console.log(animals.indexOf("Red deer"))

console.log(animals[77])


animals.splice(animals.indexOf("Spider"),3)
console.log(animals)
animals.splice(animals.indexOf("Tiger"))
console.log(animals)

let newanimals=animals.slice(animals.indexOf("Baboon"),animals.indexOf("Bison")+1)
console.log(newanimals)
