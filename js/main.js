//Home Page
showHomePage = function(){
    hideAllPages();
    document.getElementById("homePage").style.display = "inline-block";
    document.getElementById("maintext").innerHTML = "Starting";

}

//About Us Page
showAboutUsPage = function(){
    hideAllPages();
    document.getElementById("aboutUsPage").style.display = "inline-block";
    document.getElementById("maintext").innerHTML = "About Us";
}

//Hide all Pages
hideAllPages = function(){
    document.getElementById("homePage").style.display = "none";
    document.getElementById("aboutUsPage").style.display = "none";
}