function ajaxGet(url, callback) {

    var req = new XMLHttpRequest();
    req.open("GET", url);

    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });

    req.addEventListener("error", function () {
        console.error("Error with URL " + url);
    });

    req.send(null);
}

function ajaxPost(url, client_id, client_secret, callback) {
    var req = new XMLHttpRequest();
   
    req.open("POST", url);
    req.setRequestHeader("Authorization","Basic "+client_id+":"+client_secret);

    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });

    req.addEventListener("error", function () {
        console.error("Error with URL " + url);
    });

    req.send({grant_type: "client_credentials"});
}

ajaxPost("https://accounts.spotify.com/api/token","d88ec4c018424ceaadde20245de0e9d2","3a0f17ea13f041a09424be4f819e8998",function(req){
	
	var json = JSON.parse(res);
	console.log(json)
});

/*
ajaxGet("https://api.spotify.com/v1/albums?ids=7iDeHAqw3SNYh3008aS7Ql,04QI9HaICMsjI4M6BaFFmJ,4HdBkyvi0bCEQYGaBiX6fk&market=AU",req,function(res){
});
*/