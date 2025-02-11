window.showTieSheet = () => window.open("Tie.html", "_blank");
window.showLeague = () => window.open("Final.cpp", "_blank");
window.showMusic = () => window.open("music.html", "_blank");
window.showClock = () => window.open("clock.html", "_blank");
window.showHover = () => window.open("hoverEffects.html", "_blank");
window.showWeather = () => window.open("weather.html", "_blank");
window.showConverter = () => window.open("currency.html", "_blank");
window.gotoAbout = () =>  window.open("about.html","_self");
window.gotoPortfolio = () =>  window.open("portfolio.html","_self");
window.gotoProjects = () =>  window.open("projects.html","_self");
window.gotoRegister = () =>  window.open("register.html","_self");

window.gotoCover = () => window.location.href = "index.html";
function gotoContent(){
    if(document.getElementById('goto').style.visibility==="hidden"){
    document.getElementById('goto').style.visibility="visible";}
    else{
        document.getElementById('goto').style.visibility="hidden";
    }
}
