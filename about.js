window.gotoCover = () =>  window.open("index.html","_self");
window.gotoAbout = () =>  window.open("about.html","_self");
window.gotoPortfolio = () =>  window.open("portfolio.html","_self");
window.gotoProjects = () =>  window.open("projects.html","_self");
window.gotoRegister = () =>  window.open("register.html","_self");
function gotoContent(){
    if(document.getElementById('goto').style.visibility==="hidden"){
    document.getElementById('goto').style.visibility="visible";}
    else{
        document.getElementById('goto').style.visibility="hidden";
    }
}