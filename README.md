# liri-node-app

The Liri app is designed to function in the same way as Apple's Siri, but using server-side input via Node.js.

This iteration incorporates OMDB, Spotify and Twitter, and allows users to find information on their favorite movies, their favorite songs, and the most recent tweets from their own or others' Twitter accounts.

To use the OMDB function, simply type node liri.js movie-this [], where the [] may be substituted by whatever movie you'd like to research.

For the Twitter function, simply type node liri.js my-tweets to see the recent tweets of a completely nonsensical robot that has no tweeting interest or experience, or change the screen name listed with the liri.js doc to whomever you like. The results printed to the console with contain the 20 most recent tweets from whatever account you choose.

And finally, for Spotify, type node liri.js spotify-this-song "Enter song name here". To ensure full functionality, please include quotes around you song name. The yielded results will contain artist, song name, URL to the artist or song's site, and the album on which it appears.

Have fun!