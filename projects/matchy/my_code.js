var animal={};
animal.species="cheetha";
animal["name"]="sonic";
animal["noises"]=[];
console.log(animal);
var noises=[];
noises[0]="Rawr";
noises.push("meow");
noises.unshift("pur");
noises.push("Growl");
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);
animal["noises"] = noises;
noises.push("meoooowwww");
console.log(animal);

