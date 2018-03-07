let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {
	ddb.get({
		TableName: 'TestHiru',
		Key: { 'ID': 'ID' }
	}, function (err, data) {
		if (err) {
			callback('error',err);
		} else {
			callback('Data',data);
		}
	});


	// callback(null, 'Successfully executed');
}