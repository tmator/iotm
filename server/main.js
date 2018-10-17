import { Meteor } from 'meteor/meteor';
import { Picker } from 'meteor/meteorhacks:picker';
import bodyParser from 'body-parser';
import moment from 'moment';


import { Devices } from '/imports/Devices';


Meteor.startup(() => {
  // code to run on server at startup
  console.log("Sigfox callback test starting");
});

Picker.middleware(bodyParser.urlencoded({ extended: false }));
Picker.middleware(bodyParser.json());

const postRoutes = Picker.filter((req, res) => {
  return req.method === 'POST';
});

postRoutes.route('/device', function (params, req, res) {
  console.log(req.body);
  console.log(Devices.insert({name: req.body.nom, data: req.body.data, time: req.body.time}));
  res.end('OK');
});

