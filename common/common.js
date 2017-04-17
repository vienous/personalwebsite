var moment = require('moment');

exports.time = function(date,cb){
	var arr = date.split(' ');
	var time = [];
	time.push(arr[0]);
	time.push(arr[1].split('t')[0]);
	time.push(arr[1].substr(arr[1].length-2,2));
	time.push(arr[2]);
	time.push(arr[3]);
	time.push(arr[4]);
	// console.log(time);
	cb(time);
}
