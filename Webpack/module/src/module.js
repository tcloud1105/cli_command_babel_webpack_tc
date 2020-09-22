var info1 = "info1 set in module.js..."
var info2 = "info2 set in module.js..."
var info3 = "info3 set in module.js..."
var info4 = "info4 set in module.js..."
var obj = {
	p1:'property one',
	p2:'property two',
	func1:function(){
		console.log('I am func 1 from module.js')
	}
}
//export {info}
//export default info
module.exports = obj