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
			callback( err,'error');
			console.log('Error : ',err);
		} else {
			callback( data,'Data');
			console.log('success : ',data);
		}
	});


	// callback(null, 'Successfully executed');
}