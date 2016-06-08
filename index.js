/* Used this certain code to make a math formula to multiply the weight by the weight that you put into the text box */
function calculateWeight() {
    var myWeight = document.getElementById("myWeight").value;
    var myPlanet = document.getElementById("myPlanet").value;

    var myNewWeight = myWeight * myPlanet;
    var myPlanetSelection = document.getElementById("myPlanet")[document.getElementById("myPlanet").selectedIndex].text;
/* Used ' if ' to make it where when the user chooses either moon or sun it adds ' the ' to the sentene to make it proper */
    if (myPlanetSelection == 'Sun' || myPlanetSelection == 'Moon') {
        document.getElementById("answer").innerHTML = "If you were on the " + myPlanetSelection + " you would weigh " + myNewWeight + " lbs! ";
    } else {

        document.getElementById("answer").innerHTML = "If you were on " + myPlanetSelection + " you would weigh " + parsInt(myNewWeight) + " lbs! ";

    }
}
