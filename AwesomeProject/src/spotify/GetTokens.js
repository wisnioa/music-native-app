const { CLIENT_ID, REDIRECT_URI, CLIENT_SECRET } = require('react-native-dotenv');
const SpotifyWebApi = require('react-native-spotify-web-api');
const getAuthCode = require('./GetAuthCode');

const spotifyApi = new SpotifyWebApi({
    clientId: CLIENT_ID,
    redirectUrl: REDIRECT_URI,
    clientSecret: CLIENT_SECRET,
});



export default getTokens = () => {

    let code = getAuthCode(authorizationCode);


    // First retrieve an access token
    spotifyApi
        .authorizationCodeGrant(code)
        .then(function (data) {
            console.log('Retrieved access token', data.body['access_token']);

            // Set the access token
            spotifyApi.setAccessToken(data.body['access_token']);

            // Use the access token to retrieve information about the user connected to it
            return spotifyApi.getMe();
        })
        .then(function (data) {
            // "Retrieved data for Faruk Sahin"
            console.log('Retrieved data for ' + data.body['display_name']);

            // "Email is farukemresahin@gmail.com"
            console.log('Email is ' + data.body.email);

            // "Image URL is http://media.giphy.com/media/Aab07O5PYOmQ/giphy.gif"
            console.log('Image URL is ' + data.body.images[0].url);

            // "This user has a premium account"
            console.log('This user has a ' + data.body.product + ' account');
        })
        .catch(function (err) {
            console.log('Something went wrong', err.message);
        });
    spotifyApi.refreshAccessToken().then(
        function (data) {
            console.log('The access token has been refreshed!');

            // Save the access token so that it's used in future calls
            spotifyApi.setAccessToken(data.body['access_token']);
        },
        function (err) {
            console.log('Could not refresh access token', err);
        }
    );

}


