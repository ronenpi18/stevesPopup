
//Function that appears if login button pressed
function validate1() {
    var attempt = 3;


    var username = document.getElementById("username").value;//Get username from user
    var password = document.getElementById("password").value;//Get password from user

    if (username == "SteveO" && password == "youshallpass"){
        //alert ("Login successfully");
        //chrome.browserAction.onClicked.addListener(function() {
           // alert("Login successfully");
        //})
     //   window.location = "/success_login.html"; //If login was successful transfer to another page
        window.location.href="success_login.html";

    }
    else{
        // attempt --;//Decrementing by one
        // alert("You have left "+attempt+" attempt;");
        //
        // //If 3 attempts were unsuccessful disable login option
        // if( attempt == 0){
        //     document.getElementById("username").disabled = true;
        //     document.getElementById("password").disabled = true;
        //     document.getElementById("submit").disabled = true;
        // }
        window.location.href="login_fail.html";


    }

}
function register() {
    //if (document.getElementById == "Sign_up") {
    //var t2 = document.getElementById("Sign_up");
    //alert("hello world");
    //window.location = '/success_login.html'
    //chrome.browserAction.setPopup({popup: "success_login.html"});
    window.location.href="success_login.html";

//    }
}
//document.getElementById("form_id").addEventListener("click", reminder, false);

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('Login').addEventListener('click', validate1);
   // chrome.browserAction.setPopup({popup: "success_login.html"});
});
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('Sign_up').addEventListener('click', register);
//    chrome.browserAction.setPopup({popup: "popup.html"});
});

