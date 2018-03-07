let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {

	ddb.update({
		TableName: 'TestHiru',
		Key: {
			'ID': '001'
		},
		ExpressionAttributeNames: {
			'#id': 'ID'
		},
		ExpressionAttributeValues: {
			':idnew': '123'
		},
		UpdateExpression: 'set #id = :idnew',
		ConditionExpression: '#id < :idnew'
	}, function (err, data) {
		if (err) {
			callback(null,err);
			console.log('Error : ',err);
		} else {
			callback( null,data);
			console.log('success : ',data);
		}
	});


	//callback(null, 'Successfully executed');
}













