export const  Devices = new Mongo.Collection('devices_2');


if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('devicesList', function () {
    return Devices.find();
  });
}
if (Meteor.isClient) {

	Meteor.subscribe('devicesList');

	Template.devices.helpers({
  devList: function() {
	  //console.log(Devices.find().fetch()[23]);
	  //const obj = JSON.parse(Devices.find().fetch()[23]);
	  //const data = obj['time'];
	  //console.log("aa "+ data);
	  //console.log(Devices.find().fetch().length);

    return Devices.find().fetch();
  }
});

}
