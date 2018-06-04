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
        error: function(a,b,c) {
            $("#list1").html("<p>Error. Location not found.</p>");
            
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
            $("#list3").append("<p>Address: " + response.normalizedInput.line1 + "</p>");
            $("#list3").append("<p>City: " + response.normalizedInput.city + "</p>");
            $("#list3").append("<p>State: " + response.normalizedInput.state + "</p>");
            $("#list3").append("<p>Zip Code: " + response.normalizedInput.zip + "</p>");
            $("#list3").append("<p> </p>");
            for(var b = 0; b < response.officials.length; b++) {
                
            }
        },
        error: function(a,b,c) {
            $("#list3").html("<p>Error. Location not found.</p>");
            
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
        error: function(a,b,c) {
            $("#list2").html("<p>Error. Location not found.</p>");
            
        },
    });
}