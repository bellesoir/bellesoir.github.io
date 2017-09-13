
//Get value of input
//save it in a cookie

//console.log(fName);

var userButton = document.getElementById('user-btn');

userButton.addEventListener('click', function(){
    alert('button clicked AGAIN!');
    
    Cookies.set('name', document.getElementById('user').value);
    var fName = Cookies.get('name');
    //Update h2 with username
    document.getElementById('welcome').innerHTML = 'Welcome, ' + fName;
});
