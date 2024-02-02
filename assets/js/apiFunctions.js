var animeHero = {
    quoteCharacter: 'testCharacter',
    quoteText: 'testQuoteText',
    title: 'testTitle',
    genre: 'testGenre',
    animeURL: 'https://myanimelist.net/anime/29803/Overlord',
    imgUrl: 'https://cdn.myanimelist.net/images/anime/1271/127174.jpg',
    episodes: 0,
    synopsis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto aperiam ratione hic error, nam accusamus alias rerum eos tempora aut. Eius illum quis suscipit eaque odio officiis incidunt adipisci ducimus?', 
    score: 0.0
};

// this function is to set up the content for the hero
// executing two API calls to get a random series hit then serve their data to a return object
function getSetUpHeroAnimeData () {

    fetch("https://animechan.xyz/api/random")
        .then((response) => response.json())
        .then((quote) => {
            // checking if call was successful
            if (quote.anime === undefined) alert('Error during AnimeChan API call.');
            animeHero.quoteCharacter = quote.character;
            animeHero.quoteText = quote.quote;
            animeHero.title = quote.anime;
        })
        .then(() => {
            fetch('https://api.jikan.moe/v4/anime?q=' + animeHero.title + '&sfw')
                .then((response) => response.json())
                .then((resAnime) => {
                    let anime = resAnime.data[0]; // grabbing first hit as that is what we are looking for

                    // assigning values
                    animeHero.genre = anime.genres[0].name;
                    animeHero.title = anime.title_english;
                    animeHero.imgUrl = anime.images.jpg.image_url;
                    animeHero.episodes = anime.episodes;
                    animeHero.synopsis = anime.synopsis;
                    animeHero.score = anime.score;
                    animeHero.animeURL = anime.url;

                    // TODO: call Hero Set-up function
                    //console.log(animeHero);

                });
        });
}