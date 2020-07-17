//assignment (1) start>>
//feetToMile
function feetToMile(feet){
    var mile = feet / 5280;     //we know 5280 feet = 1 mile.
    return mile;
}
var getMile = feetToMile(1);
console.log(getMile.toFixed(9)); //i just use topfixed for showing same result as google showed!
//assignment (1) finish>>


//assignment-(2) start>>
//woodCalculator
function woodCalculator(chair, table, bed){
    var chairWood = chair * 1;  
    var tableWood = table * 3;
    var bedWood = bed * 5;
    var totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}
var total = woodCalculator(14, 5, 12);
console.log(total);
//assignment (2) finish>>


//assignment (3) start>>
//brickCalculator
function brickCalculator(bricks){
    const oneFeet           = 1000;
    const firstTenFloors    = 15;
    const secondTenFloors   = 12;
    const overTwenty        = 10;
    if(bricks <= 10){
        var multiply = bricks * firstTenFloors;
        var result = multiply  * oneFeet;
        return result;
    }else if(bricks <=20){
        var subtract = bricks - 10;
        var multiply = subtract * secondTenFloors;
        var firstTen = 10 * 15;
        var total    = multiply + firstTen;
        var result = total * oneFeet;
        return result;
    }else if(bricks > 20){
        var subtract = bricks - 20;
        var multiply = subtract * overTwenty;
        var firstTen = 10*15;
        var secondTen = 10*12; 
        var total = multiply + firstTen + secondTen;
        var result = total  *oneFeet;
        return result;
    }
}
console.log(brickCalculator(15)); 
//assignment (3) finish>>


//assignment (4) start>>
//tinyFriend
function tinyFriend(names){
    var smallName = names[0];
    for(var i = 0; i < names.length; i++){
        var tinyName = names[i];
        if(tinyName.length < smallName.length){
            smallName = tinyName;
        }
	}
	return smallName;
}
var smallestName = tinyFriend(['sabrina', 'shahed', 'atik', 'arifur', 'maruf']);
console.log(smallestName);
//assignment (4) finish>>