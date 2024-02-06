// =========== Hero Section ============
function animeHeroSetup() {
    var heroImage = $("<img>"); //initializes image variable to an image element
    heroImage.attr("src", animeHero.imgUrl); // attaches image link to element
    $(".hero-image").append(heroImage); //appends value in image variable to hero-image class
    $(".hero-title").html("<h1>" + animeHero.title + "</h1>");//adds an h1 element with title
    $(".hero-episodes").text("Episodes: " + animeHero.episodes);
    $(".hero-name").text("~ " + animeHero.quoteCharacter);//adds character name to name class
    //adds blockquote with citation
    $(".hero-quote").html("<blockquote cite=" + animeHero.animeURL + ">" + animeHero.quoteText + "</blockquote>");
    $(".hero-button").append($('<a>').attr('href', animeHero.animeURL).text('More').attr("target", "_blank"));

}
// =========== Anime Catalog Section ============
// This function renders TV catatog
function TVrender (){
    var TVCatalog = document.querySelector(".TV-catalog")
    var TVcontent =  document.createElement("div")
    TVcontent.setAttribute("class","content col-lg-11  d-flex  justyfy-content-lg-between flex-wrap")
    // TVcontent.setAttribute("style","row-gap:20px")
    var category = document.createElement("div");
    category.classList.add("col-lg-1","col-md-3", "category","text-center","pt-5","border","text-light")
    var categoryImage = document.createElement("img");
    categoryImage.setAttribute("src","./assets/icons/TV.svg");
    categoryImage.classList.add("icon")
    var categoryTitle = document.createElement("h4")
    categoryTitle.textContent=("TV Shows")
    category.append(categoryImage,categoryTitle)
    TVcatalog.forEach(buildClatalog = (value,i) => {
       var TVHolder = document.createElement("div");
       TVHolder.setAttribute("class","col-lg-2 holder col-md-4 col-sm-4 col-xs-6")
       var picHolder = document.createElement("div");
       picHolder.setAttribute("class","pic-holder")
       var TVImage = document.createElement("img")
       TVImage.setAttribute("src",TVcatalog[i].imgUrl)
       TVImage.setAttribute("class","image")
       var TVlayer = document.createElement("div")
       TVlayer.setAttribute("class","layer")
       var layerTitle = document.createElement("h6");
       layerTitle.classList.add("text-light")
       layerTitle.textContent = TVcatalog[i].title;
       var layerScore = document.createElement("div");
       var score = document.createElement("span");
       score.textContent = TVcatalog[i].score;
       var star = document.createElement("i");
       star.classList.add("fa-solid","fa-star","ms-2");
       layerScore.append(score,star)
       var layerRanking = document.createElement("p");
       layerRanking.textContent = `Ranking: ${TVcatalog[i].ranking}`
       var layerEpisode = document.createElement("p");
       layerEpisode.textContent = `${TVcatalog[i].episodes} Episods`;
       var layerSynopsis = document.createElement("p");
       layerSynopsis.textContent = `${TVcatalog[i].synopsis}`;
       layerSynopsis.classList.add("text-light","mt-3");
       var btnBox = document.createElement("div");
       btnBox.classList.add("btn-box");
       var play = document.createElement("a");
       play.setAttribute("target","_blank");
       play.setAttribute("href",TVcatalog[i].animeUrl)
       var playIcon = document.createElement("i");
       playIcon.classList.add("fa-solid","fa-play","fs-5")
       play.append(playIcon)
       btnBox.append(play)
       picHolder.append(TVImage)
       TVlayer.append(layerTitle,layerScore,layerRanking,layerEpisode,layerSynopsis)
       TVHolder.append(picHolder,TVlayer,btnBox);
       TVcontent.append(TVHolder);
       TVCatalog.append(category,TVcontent)
      
   })}
//    This function renders movie catatog
   function movieRender(){
    var movieCatalog = $(".movie-catalog")
    var movieContent = $("<div>")
    movieContent.attr("class","content col-lg-11 d-flex  justyfy-content-lg-between flex-wrap")
    var category = $("<div>");
    category.addClass("col-lg-1 col-md-3 category text-center pt-5 border text-light")
    var categoryImage = $("<img>");
    categoryImage.attr("src","./assets/icons/movie.svg");
    categoryImage.addClass("icon")
    var categoryTitle = $("<h4>")
    categoryTitle.text("Movie")
    category.append(categoryImage,categoryTitle)
    movieCatalog.prepend(category)
    Moviecatalog.forEach(buildClatalog = (value,i) => {
        var movieHolder = $("<div>");
        movieHolder.attr("class","col-lg-2 holder col-md-4 col-sm-4 col-xs-6")
        var picHolder = $("<div>");
        picHolder.attr("class","pic-holder")
        var movieImage =$("<img>")
        movieImage.attr("src",Moviecatalog[i].imgUrl)
        movieImage.attr("class","image")
        var movieLayer = $("<div>")
        movieLayer.attr("class","layer")
        var layerTitle = $("<h6>");
        layerTitle.addClass("text-light")
        layerTitle.text(Moviecatalog[i].title);
        var layerScore = $("<div>");
        var score = $("<span>").text(Moviecatalog[i].score);
        var star = $("<i>").addClass("fa-solid fa-star ms-2 secondary");
        layerScore.append(score,star)
        var layerRanking = $("<p>");
        layerRanking.text(`Ranking: ${Moviecatalog[i].ranking}`)
        var layerSynopsis = $("<p>");
        layerSynopsis.text(`${Moviecatalog[i].synopsis} Episods`)
        layerSynopsis.addClass("text-light mt-3")
        var btnBox = $("<div>").addClass("btn-box")
        var play = $("<a>")
        play.attr("target","_blank");
        play.attr("href",Moviecatalog[i].animeUrl)
        var playIcon = $("<i>").addClass("fa-solid fa-play fs-5")
        play.append(playIcon)
        btnBox.append(play)
        picHolder.append(movieImage)
        movieLayer.append(layerTitle,layerScore,layerRanking,layerSynopsis)
        movieHolder.append(picHolder,movieLayer,btnBox);
        movieContent.append(movieHolder);
        movieCatalog.append(category,movieContent)
})}