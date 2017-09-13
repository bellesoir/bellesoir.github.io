
//Get value of input
//save it in a cookie
Cookies.set('name', document.getElementById('user').value);

var fName = Cookies.get('name');
console.log(fName);

document.getElementById('welcome').innerText = 'Welcome, ' + fName;
//document.getElementById('welcome').innerText = '';
