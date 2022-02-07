//function called distanceFromHqinBlocks
//takes in pickup location for a passenger
//returns the number of blocks from hq on 42nd.

//returns 



const headquarters = 42;
function distanceFromHqInBlocks(pickupLocation) {
    if (pickupLocation >= headquarters) {
        return (pickupLocation - headquarters);
    } else {
        return (headquarters - pickupLocation);
    }

}

//function called distanceFromHqInFeet
//each block is 264 feet long.
//returns return value from distanceFromHqInBlocks converted to feet.

const headquartersInFeet = 264

function distanceFromHqInFeet(pickupLocation) {
    let distanceInFeet = distanceFromHqInBlocks(pickupLocation);
    return distanceInFeet * headquartersInFeet;
}

// function distanceFromHqInFeet(pickupLocation) {
//     if (pickupLocation >= headquarters) {
//         return ((pickupLocation - headquarters) * headquartersInFeet);
//     } else if (pickupLocation < headquarters) {
//         return ((headquarters - pickupLocation) * headquartersInFeet);
//     }
// }

//function called distanceTravelledInFeet
//start at HQ and goes to pickuplocation
//returns the feet travelled (264 ft / block)




function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
        let distanceTravelled = destination - start;
        return distanceTravelled * headquartersInFeet;
    } else {
        let distanceTravelled = start - destination;
        return distanceTravelled * headquartersInFeet; 
    }
}
console.log(distanceTravelledInFeet(40))


// function called calculatesFarePrice(start, destination) THAT CALLS distanceTravelledInFeet
// if/else conditions:
// if >= 400, returns 0 "free"
// if between 401 and 2000 , returns 2 cents / ft.
// if between 2001 and 2500, returns flat fare of 25
// if over 2500, returns string "cannot travel that far"



function calculatesFarePrice(start, destination) {
    let farePrice = 0;
    let distanceInFeet = distanceTravelledInFeet(start, destination);
    if (distanceInFeet < 400) {
        farePrice = 0;
        return farePrice;
    } else if (distanceInFeet > 400 && distanceInFeet< 2000) {
        farePrice = (distanceInFeet - 400) * 0.02;
        return farePrice;
    } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
        farePrice = 25;
        return farePrice;
    } else {
        return "cannot travel that far";
    }

    
}
    