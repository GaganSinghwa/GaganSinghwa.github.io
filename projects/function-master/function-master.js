function objectValues(obj){
    var newArray=[];
    for(var key in obj){
        newArray.push(obj[key]);
    }return newArray;
}
function keysToString(obj){
    for(var key in obj){
        var key=Object.keys(obj);
    }return key.join(" ");
}
function valuesToString(obj){
    var outPut=[];
    for(var key in obj){
        if(typeof obj[key]==="string"){
            outPut.push(obj[key]);
        }
    } return outPut.join(" ")
     
}
function arrayOrObject(arrOrObj){
    if(Array.isArray(arrOrObj)){
        return "array";
    }   return "object";
}
function capitalizeWord(word){
    return word.charAt(0).toUpperCase()+word.substring(1, word.length);
}

function capitalizeAllWords(stringOfWords){
    var newArr= stringOfWords.split(" ");
    for(var i=0; i< newArr.length;i++){
        newArr[i]=capitalizeWord(newArr[i]);
    } return newArr.join(" ");
}

function welcomeMessage(obj){
    if(obj.name){
        return "Welcome "+ capitalizeWord(obj.name)+"!";
    }
}
function profileInfo(obj){
    for(var keys in obj){
        if(obj.name&&obj.species){    // wants both name and species so use &&
      return  capitalizeWord(obj.name) + " is a " + capitalizeWord(obj.species);   
    }    
    }
    
        
     
}     

function maybeNoises(obj){
    
        if(!Array.isArray(obj.noises) || obj.noises.length===0){
       return "there are no noises" ;
        }else if(Array.isArray(obj.noises)){
           return valuesToString(obj.noises);  
        }   
}
function hasWord(str,stringOfWords){
    if(str.includes(stringOfWords)){
        return true;
    } else return false;
}
function addFriend(name,object){
   object["friends"].push(name);
   return object;

}
function isFriend(name,object){
    if(object.friends){
        for(var i=0;i<object.friends.length;i++){
        if(object.friends[i]===name){
            return true;
        }
    }
    
    }return false;
        
} 
var nonFriends = function (name, list) {
    var nonfriends = []; // this will be the list we return
    for (var i = 0; i < list.length; i++) { //iterate over the parameter
        var friends = list[i].friends; 
        var isFriend = false;
        if (list[i].name !== name) { //if this isn't the person we're testing for
            for (var j=0; j < friends.length; j++) { //iterate over their friends
                if (friends[j] === name) { //if they have the person as a friend
                    isFriend = true; //record that they have the person as a friend
                } 
            }
            if (!isFriend) nonfriends.push(list[i].name); //after iterating over all their friends, if they didn't have the person as a friend, add them to the list to be returned
        } else {
            isFriend = true; //this else clause isn't doing anything, I just wrote it in hastily and superfluously when I added the logic that a person is a friend of herself.
        }
    }
    return nonfriends;
};
function updateObject(obj,key,value){
    obj[key]=value;
    return obj;
}

function removeProperties(object, array) {
    for (var i = 0; i < array.length; i++) {
        if (object[array[i]] || Array.isArray(object[array[i]]) === false) {
            delete object[array[i]];
        }
    }
}

function dedup(array){
    return Array.from(new Set(array));
}



