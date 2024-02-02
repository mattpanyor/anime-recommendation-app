// setting up default catalogItem
var testAnimeCatalogItem = {
    title: 'testTitle',
    ranking: 0,
    score: 0.0,
    imgUrl: '',
    animeUrl: '',
    synopsis: '',
    episodes: 0
}

/*
    genre IDs
    Action  :   1
    Sci-Fi  :   24
    Comedy  :   4
    Romance :   22
    Horror  :   14
*/

// this funtions gets the data for the catalog by a certain genre and calls the update function
// two API calls seperately calling two update functions for the element build-up
function setUpAnimeCatalogData (genre){

    fetch('https://api.jikan.moe/v4/anime?sort=desc&order_by=score&limit=6&type=tv&genres='+ genre)
        .then((response) => response.json())
        .then((list) => {
            var TVcatalog = [];
            list.data.forEach(anime => {
                var animeCatalogItem = {
                    title: anime.title,
                    ranking: anime.rank,
                    score: anime.score,
                    imgUrl: anime.images.jpg.image_url,
                    animeUrl: anime.url,
                    synopsis: anime.synopsis,
                    episodes: anime.episodes
                }
                TVcatalog.push(animeCatalogItem);
                    
            });
            //console.log(TVcatalog);

            //TODO TV catalog building function
        });

    fetch('https://api.jikan.moe/v4/anime?sort=desc&order_by=score&limit=6&type=movie&genres='+ genre)
        .then((response) => response.json())
        .then((list) => {
            var Moviecatalog = [];
            list.data.forEach(anime => {
                var animeCatalogItem = {
                    title: anime.title,
                    ranking: anime.rank,
                    score: anime.score,
                    imgUrl: anime.images.jpg.image_url,
                    animeUrl: anime.url,
                    synopsis: anime.synopsis
                }
                Moviecatalog.push(animeCatalogItem);
                
            });
            //console.log(Moviecatalog);

            //TODO Movie catalog building function
        });

}