// const { CLIENT_ID, REDIRECT_URI, CLIENT_SECRET } = require('react-native-dotenv');

// const SpotifyWebApi = require('react-native-spotify-web-api');

// const axios = require('axios');

// export default getAuthorizeCode = () => {

//     const spotifyApi = new SpotifyWebApi({
//         clientId: CLIENT_ID,
//         redirectUrl: REDIRECT_URI,
//         clientSecret: CLIENT_SECRET,
//         scopes: ['user-read-private', 'user-read-email', 'user-read-library'],
//     });

//     // Create the authorization URL
//     const authorizeURL = spotifyApi.createAuthorizeURL(scopes);
//     console.log(authorizeURL);



//     const authorizationCode = [];
//     axios.get(`${authorizeURL}`)
//         .then(function (response) {

//             // handle success
//             console.log(response);
//             authorizationCode.push(response.params.code);

//         })
//         .catch(function (error) {
//             // handle error
//             console.log(error);
//         })
//         .finally(function () {
//             // always executed
//         });
//     return authorizationCode;

// }