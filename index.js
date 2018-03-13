var obj = { prop: propnumber}
var recipes ={obj}


var updateObjectWithKeyAndValue=(obj, 'prop2', 2)
function newobj (prop,propnumber){
  return Object.assign({},obj,{[prop]:propnumber})
}