var fortuneCookies = [
	"cookie 1",
	"cookie 2",
	"cookie 3",
	"cookie 4",
	"cookie 5",
];
exports.getFortune = function(){
	var idx = Math.floor(Math.random()*fortuneCookies.length);
	return fortuneCookies[idx];
};
