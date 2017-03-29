var animal={};
animal.species="cheetha";
animal["name"]="Sonic";
animal["noises"]=[];

console.log(animal);
var noises=[];
noises[0]="Rawr";
noises.push("meow");
noises.unshift("pur");
noises.push("Growl");

console.log("console 2",noises.length);
console.log("console 3",noises[noises.length - 1]);
console.log("console 4",noises);
animal["noises"] = noises;
noises.push("meoooowwww");
console.log("console 5",animal);
var animals=[];
animals.push(animal);
console.log("console 6",animals);
var duck={ species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);
console.log("this is my animals array",animals);
var rabbit={ species: 'rabbit', name: 'Kevin', noises: ['clucking', 'muttering', 'wheezing', 'growling'] };
var turtle={ species: 'turtle', name: 'Mike', noises: ['squeal', 'yell'] };
animals.push(rabbit);
animals.push(turtle);

console.log("console 7",animals);
console.log(animals.length);
//we chose an array beacuse its easier to access them and apply methods to them.
var friends=[];
function randomElement(){
   var randomName = Math.floor(Math.random() * (animals.length));
   return animals[randomName].name;
}
randomElement();
friends.push(randomElement());
console.log("this is random animal",friends);
animals[0].friends = friends;
console.log(animals);
function search(anName){
    for(var i=0;i<animals.length;i++){
      if(animals[i].name===anName){
          return animals[i];
      }   
    } return null;
   
}
search();
function edit(anAnimal,anObject){
    for(var i=0;i<animals.length;i++){
        if(animals[i].name===anAnimal){
      
        
            return animals[i]=anObject;
        }
    } 
}
edit();
function remove(revAnName) {
    for(var i=0;i<animals.length;i++){
       if(animals[i].name===revAnName){
       return animals.splice(i,1);
       } 
    }
}
remove();

function create(anCreate) {
        
        if(anCreate.name.length > 0 && anCreate.species.length > 0)    {
            for(var i = 0; i < animals.length; i++)
        {
        if(anCreate.name === animals[i].name) {
            return null;
        } 
 
        }   return animals.push(anCreate); 
        }                
        }
