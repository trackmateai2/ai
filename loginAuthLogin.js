
document.addEventListener('DOMContentLoaded', function() {
    var webAuth = new auth0.WebAuth({
        domain: 'dev-sbc5r8exf2mefu6u.us.auth0.com',
        clientID: 'n8iLnlRGG5CvJcBFB3UiDtRo1rvUXOd9'
    });

    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();
        var email = document.getElementById('email').value;
        var password = document.getElementById('passwordIn').value;

        var url = webAuth.client.buildAuthorizeUrl({
            clientID: 'n8iLnlRGG5CvJcBFB3UiDtRo1rvUXOd9',
            responseType: 'token id_token',
            redirectUri: 'https://www.bing.com',
            state: 'yourState',
            nonce: 'yourNonce'
        });

        // Redirect the user to the constructed authorization URL
        window.location.href = ("https://trackmateai.github.io/ai/appNewAppMain.html");
    });
});

