var url = "https://www.codewars.com/api/v1/users/";
$(function () {

    var username = "mayurarora";
    fetchDetails(username);

});

function fetchDetails(username) {
    
    events = {
        imgRefresh: {
            click: refresh
        }
    }
    utils.getJSONData(url + username, {}).then(function (res) {
        console.log(res);
        utils.compileTemplate("divCodewars", "codewars-template", res);
        utils.attachEvents(events);
        
    }, function () {});
}
var refresh = function() {
    document.getElementById("spanUsername").removeEventListener("click");
    fetchDetails(document.getElementById("spanUsername").innerHTML);
}
                                               
                                               