Problem:1

// find value kilometer to meter 

function kilometerToMeter(kilometer){
var meter=kilometer*1000;
return meter;
}

Problem:2

// find totalPrice with budgetCalculator function
function budgetCalculator(watch,mobile,laptop){
    var watchPrice=watch*50;
    var mobilePrice=mobile*100;
    var laptopPrice=laptop*500;
    var totalPrice=(watchPrice+mobilePrice+laptopPrice);
    return totalPrice;
}

Problem:3

// find hotelCost function



function hotelCost(stay){
var rent=0;
if (stay<=10){
    rent=stay*100;
}
else if(stay<=20){
    var first10days=10*100;
    var remaining=stay-10;
    var second10days=remaining*80;
    rent=first10days+second10days;
}
else{
    var first10days=10*100;
    var second10days=10*80;
    var remaining=stay-20;
    var third10days=remaining*50;
    rent=first10days+second10days+third10days;
}
return rent;}

// Problem:4
// find the largest Name in array
function megaFriend(friendName){
    var max=friendName[0];
    for(var i=0;i<friendName.length;i++){
        var element=friendName[i]
        if(element.length>max.length){
            max=element;
        }
    }
    return max;
}


