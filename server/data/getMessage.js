var MessageList = [];

exports.getMessageList = function(callback) {
	var db = require('../sqlserver/db');
	db.sql("select * from WXUser", function(err, result) {
		if (err) {
			console.log(err);
			return;
		}
		console.log('表数据如下 :', result);
		callback(result);
	})
};