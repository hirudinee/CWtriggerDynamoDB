let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {
	ddb.get({
		TableName: 'TestHiru',
		Key: {
			'ID': '001'
		}
	}, function (err, data) {
		if (err) {
			callback('error', err);
			console.log('Error : ',err)
		} else {
			callback('Data', data);
			console.log('success : ',data)
		}
	});


	// callback(null, 'Successfully executed');
}