let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {
	ddb.get({
		TableName: 'TestHiru',
		Key: {
			'ID1': '002'
		}
	}, function (err, data) {
		if (err) {
			callback(null,err);
			console.log('Error : ',err);
		} else {
			callback( null,data);
			console.log('success : ',data);
		}
	});


	// callback(null, 'Successfully executed');
}