import { HTTP } from 'meteor/http';

Template.body.events({
    'submit .location' (event) {
        event.preventDefault();
        var comment_text = document.getElementById("location").value;
        alert(comment_text);
        var comment_text1 = document.getElementById("breed").value;
        alert(comment_text1);
        Meteor.call('fetchFromService', comment_text, comment_text1, function(err, respJson) {
            if (err) {
                window.alert("Error: " + err.reason);
                console.log("error occured on receiving data on server. ", err);
            } else {
                console.log("respJson: ", respJson);
                //window.alert(respJson.length + ' tweets received.');
            }
        });
    },

    'submit .breed' (event) {
        event.preventDefault();
        var comment_text = document.getElementById("location").value;
        alert(comment_text);
        var comment_text1 = document.getElementById("breed").value;
        alert(comment_text1);
        Meteor.call('fetchFromService', comment_text, comment_text1, function(err, respJson) {
            if (err) {
                window.alert("Error: " + err.reason);
                console.log("error occured on receiving data on server. ", err);
            } else {
                console.log("respJson: ", respJson);
                //window.alert(respJson.length + ' tweets received.');
            }
        });
    },

    'submit .age' (event) {
        event.preventDefault();
        var comment_text = document.getElementById("location").value;
        alert(comment_text);
        var comment_text1 = document.getElementById("breed").value;
        alert(comment_text1);
        Meteor.call('fetchFromService', comment_text, comment_text1, function(err, respJson) {
            if (err) {
                window.alert("Error: " + err.reason);
                console.log("error occured on receiving data on server. ", err);
            } else {
                console.log("respJson: ", respJson);
                //window.alert(respJson.length + ' tweets received.');
            }
        });
    },

    'submit .gender' (event) {
        event.preventDefault();
        var comment_text = document.getElementById("location").value;
        alert(comment_text);
        var comment_text1 = document.getElementById("breed").value;
        alert(comment_text1);
        Meteor.call('fetchFromService', comment_text, comment_text1, function(err, respJson) {
            if (err) {
                window.alert("Error: " + err.reason);
                console.log("error occured on receiving data on server. ", err);
            } else {
                console.log("respJson: ", respJson);
                //window.alert(respJson.length + ' tweets received.');
            }
        });
    }
});