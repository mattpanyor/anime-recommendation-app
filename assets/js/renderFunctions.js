// =========== Anime Catalog Section ============
// This function renders TV catatog
function TVrender (){
    var TVCatalog = document.querySelector(".TV-catalog")
    var TVcontent =  document.createElement("div")
    TVcontent.setAttribute("class","TV-content col-lg-10 d-flex  justyfy-content-lg-between flex-wrap")
    var category = document.createElement("div");
    category.classList.add("col-lg-2","col-md-3", "category","text-center","pt-5","border","border-secondary-subtle")
    var categoryImage = document.createElement("img");
    categoryImage.setAttribute("src","./assets/icons/TV.svg");
    categoryImage.classList.add("icon")
    var categoryTitle = document.createElement("p")
    categoryTitle.textContent=("TV Shows")
    category.append(categoryImage,categoryTitle)
    TVcatalog.forEach(buildClatalog = (value,i) => {
       var TVHolder = document.createElement("div");
       TVHolder.setAttribute("class","col-lg-2 holder col-md-4 col-sm-6")
       var picHolder = document.createElement("div");
       picHolder.setAttribute("class","pic-holder")
       var TVImage = document.createElement("img")
       TVImage.setAttribute("src",TVcatalog[i].imgUrl)
       TVImage.setAttribute("class","image")
       var TVlayer = document.createElement("div")
       TVlayer.setAttribute("class","layer")
       var layerTitle = document.createElement("h6");
       layerTitle.textContent = TVcatalog[i].title;
       var layerRanking = document.createElement("p");
       layerRanking.textContent = `Ranking:${TVcatalog[i].ranking}`
       var layerEpisode = document.createElement("p");
       layerEpisode.textContent = `${TVcatalog[i].episodes} Episods`
       var layerSynopsis = document.createElement("p");
       layerSynopsis.textContent = `${TVcatalog[i].synopsis} Episods`
       picHolder.append(TVImage)
       TVlayer.append(layerTitle,layerRanking,layerEpisode,layerSynopsis)
       TVHolder.append(picHolder,TVlayer);
       TVcontent.append(TVHolder);
       TVCatalog.append(category,TVcontent)
      
   })}
//    This function renders movie catatog
   function movieRender(){
    var movieCatalog = $(".movie-catalog")
    var movieContent = $("<div>")
    movieContent.attr("class","movie-content col-lg-10 d-flex  justyfy-content-lg-between flex-wrap")
    var category = $("<div>");
    category.addClass("col-lg-2 col-md-3 category text-center pt-5 border")
    var categoryImage = $("<img>");
    categoryImage.attr("src","./assets/icons/movie.svg");
    categoryImage.addClass("icon")
    var categoryTitle = $("<p>")
    categoryTitle.text("Movie")
    category.append(categoryImage,categoryTitle)
    movieCatalog.prepend(category)
    Moviecatalog.forEach(buildClatalog = (value,i) => {
        var movieHolder = $("<div>");
        movieHolder.attr("class","col-lg-2 holder col-md-4 col-sm-6")
        var picHolder = $("<div>");
        picHolder.attr("class","pic-holder")
        var movieImage =$("<img>")
        movieImage.attr("src",Moviecatalog[i].imgUrl)
        movieImage.attr("class","image")
        var movieLayer = $("<div>")
        movieLayer.attr("class","layer")
        var layerTitle = $("<h6>");
        layerTitle.text(Moviecatalog[i].title);
        var layerRanking = $("<p>");
        layerRanking.text(`Ranking:${Moviecatalog[i].ranking}`)
        var layerSynopsis = $("<p>");
        layerSynopsis.text(`${Moviecatalog[i].synopsis} Episods`)
        picHolder.append(movieImage)
        movieLayer.append(layerTitle,layerRanking,layerSynopsis)
        movieHolder.append(picHolder,movieLayer);
        movieContent.append(movieHolder);
        movieCatalog.append(category,movieContent)
})}