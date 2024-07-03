

document.addEventListener('DOMContentLoaded', function() {
    var webAuth = new auth0.WebAuth({
        domain: 'dev-sbc5r8exf2mefu6u.us.auth0.com',
        clientID: 'n8iLnlRGG5CvJcBFB3UiDtRo1rvUXOd9'
    });

    document.getElementById('form-sign').addEventListener('submit', function(event) {
        event.preventDefault();
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        webAuth.signup({
            connection: 'Username-Password-Authentication',
            email: email,
            password: password
        }, function(err) {
            if (err) {
                console.error('Error signing up:', err);
                alert("Failed to sigup. Password MUST be 8 characters contain a special character");
            } else {
                console.log('User signed up successfully');
                alert("Signup Successful. Proceed to Login");
            }
        });
    });
});

