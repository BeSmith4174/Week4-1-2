function checkCreds() {
    // place to store first name
    var firstName = document.getElementById("fName").value;
    // place to store last name
    var lastName = document.getElementById("lName").value;
    //place to store badge id
    var badgeNumb = document.getElementById("badgeID").value;
    // displays first and last name with a space between them
    var fullName = firstName + " " + lastName;
    //function that throw error if too many characters are entered
    if (fullName.length > 20 || fullName == 1) {

        document.getElementById("loginStatus").innerHTML = "Invalid full name!";
    }
    //throw an error if to many numbers are used for badge number
    if (badgeNumb > 999 || badgeNumb < 1) {
        document.getElementById("loginStatus").innerHTML = "Invalid badge number!";

    }
    //displays welcome with full name once all parameters set
    if (fullName.length < 21 && fullName.length > 1 && badgeNumb < 1000 && badgeNumb > 0) {
        alert("Access Granted! Welcome! " + fullName);
        location.replace("HTMLW2.html")
    }


}