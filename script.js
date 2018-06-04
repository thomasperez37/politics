$(document).ready(function() {
    
});

var url =  "https://www.googleapis.com/civicinfo/v2/";
var politicsA = "elections";
var politicsB = "representatives";
var politicsC = "voterinfo";
var key = "?key=AIzaSyDY2JtghVp4-UtRK2cf4bVNzk2AUPDXHTU&address=";

function civicsURLWithSearchTermA(searchTerm) {
    return url + politicsA + key + searchTerm
}

function callCivicsAPIWithSearchTermA(searchTerm) {
    // write a function that uses the above two functions to create the url,
    // uses ajax to send a request, and changes html of list
    var url = civicsURLWithSearchTermA(searchTerm);
    console.log(url);
    $.ajax({
        url: url,
        method: "GET",
        success: function(response) {
            
        },
    });
}

function civicsURLWithSearchTermB(searchTerm) {
    return url + politicsB + key + searchTerm
}

function callCivicsAPIWithSearchTermB(searchTerm) {
    // write a function that uses the above two functions to create the url,
    // uses ajax to send a request, and changes html of list
    var url = civicsURLWithSearchTermB(searchTerm);
    console.log(url);
    $.ajax({
        url: url,
        method: "GET",
        success: function(response) {
            
        },
    });
}

function civicsURLWithSearchTermC(searchTerm) {
    return url + politicsC + key + searchTerm
}

function callCivicsAPIWithSearchTermC(searchTerm) {
    // write a function that uses the above two functions to create the url,
    // uses ajax to send a request, and changes html of list
    var url = civicsURLWithSearchTermC(searchTerm);
    console.log(url);
    $.ajax({
        url: url,
        method: "GET",
        success: function(response) {
            
        },
    });
}