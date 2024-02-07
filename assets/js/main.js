//function calls
getSetUpHeroAnimeData();
setUpAnimeCatalogData(4);

// on click event on navbar for refreshing the content below
$('.genrebtn').on('click', event => {
    event.preventDefault();

    //making sure we clean prev content
    $('.TV-catalog').empty();
    $('.movie-catalog').empty();

    //call set up funtion with pressed ID
    setUpAnimeCatalogData(parseInt($(event.target).attr('data-id')));
});