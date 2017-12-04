var input = this.location.pathname.toString().replace('/', '');
var result = {};
var d = new Date();

if(isNaN(input)){
  //not number
  input = input.replace(/%20/g, ' ');
  input = input.replace(/%/g, ' ');
  var date = new Date(input);
  result.normal = new Date(input);
  result.unix =  date.getTime();
  sendResult(result);
} else {
  //is number
  var date = new Date(eval(input));
  result.unix = date.getTime();
  result.normal = date;
  sendResult(result);
}

function sendResult(res){
  if(res.normal == "Invalid Date"){
    unix.innerHTML = 'null';
    norm.innerHTML = 'null';
  } else {
    unix.innerHTML = res.unix;
    norm.innerHTML = res.normal;
  }
}
