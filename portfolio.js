window.gotoCover = () => window.location.href = "index.html";
function gotoContent(){
    if(document.getElementById('goto').style.visibility==="hidden"){
    document.getElementById('goto').style.visibility="visible";}
    else{
        document.getElementById('goto').style.visibility="hidden";
    }
}
window.gotoAbout = () =>  window.open("about.html","_self");
window.gotoPortfolio = () =>  window.open("portfolio.html","_self");
window.gotoProjects = () =>  window.open("projects.html","_self");
window.gotoRegister = () =>  window.open("register.html","_self");
window.showCV = () => window.open("CV.pdf","_blank");
window.showCCT = () => window.open("CCT.pdf","_blank");
window.github = () => window.open("https://github.com/pp-beb","_blank");
window.linkedin = () => window.open("https://www.linkedin.com/in/prithak-koirala-2253802b1/?originalSubdomain=np","_blank");