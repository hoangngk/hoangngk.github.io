function btnLoginClick() {
    var message = '';
    var email = document.querySelector('#inputEmail').value;
    var password = document.querySelector('#inputPassword').value;

    if (email.length == 0) {
        message = message + 'Email is not empty.<br/>';
    } else {
        if (!email.endsWith('@gmail.com')) {
            message = message + 'Email must endswith @gmail.com.<br/>';
        }
    }

    if (password.length == 0) {
        message = message + 'Password is not empty.<br/>';
    } else {
        if (password.length < 8) {
            message = message + 'Password must be minimum 8 characters.';
        }
    }

    if (message === '' || message.length === 0) 
        message = 'Login successfully';

    document.querySelector('.message').innerHTML = message;
}