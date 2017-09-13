
//Get value of input
//save it in a cookie
Cookies.set('name', document.getElementById('user').value);

var fName = Cookies.get('name');
console.log(fName);

//Update h2 with username
document.getElementById('welcome').innerHTML = 'Welcome, ' + fName;
