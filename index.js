function calculateWeight() {
    var myWeight = document.getElementById("myWeight").value;
    var myPlanet = document.getElementById("myPlanet").value;

    var myNewWeight = myWeight * myPlanet;
    var myPlanetSelection = document.getElementById("myPlanet")[document.getElementById("myPlanet").selectedIndex].text;

    if (myPlanetSelection == 'Sun' || myPlanetSelection == 'Moon') {
        document.getElementById("answer").innerHTML = "If you were on the " + myPlanetSelection + " you would weigh " + myNewWeight + " lbs! ";
    } else {

        document.getElementById("answer").innerHTML = "If you were on " + myPlanetSelection + " you would weigh " + parsInt(myNewWeight) + " lbs! ";

    }
}
