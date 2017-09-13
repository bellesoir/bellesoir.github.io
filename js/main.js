
//Get value of input
//save it in a cookie

//console.log(fName);

var userButton = document.getElementById('user-btn');
function checkCookie(){
    var cookieName = Cookies.get('name');
    if (cookieName !== ''){
        document.getElementById('welcome').innerHTML = 'Welcome, ' + Cookies.get('name');
    }
};

checkCookie();

userButton.addEventListener('click', function(){
    alert('button clicked AGAIN!');
    Cookies.set('name', document.getElementById('user').value);
    //Update h2 with username
    document.getElementById('welcome').innerHTML = 'Welcome, ' + Cookies.get('name');
});
