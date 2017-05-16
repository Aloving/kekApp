module.exports = function(){
	var now = new Date();
	var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	return now - today;
};