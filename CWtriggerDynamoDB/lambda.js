let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {


	ddb.put({
		TableName: 'TestHiru',
		Item: { 'ID': '001', 'Name': 'Hiru' }
	}, function (err, data) {
		if (err) {
			callback('error',err);
		} else {
			callback('Data',data);
		}
	});


	callback(null, 'Successfully executed');
}