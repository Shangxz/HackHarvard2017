import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

});

Meteor.methods({
    fetchFromService: function(data, data1) {
        this.unblock();
        var url = "https://f9ij31drdl.execute-api.us-east-1.amazonaws.com/prod/myresource";
        //synchronous GET
        return HTTP.call('POST', url, {
            data: { Breedtype: data, Location: data1 }
        });

    }
});