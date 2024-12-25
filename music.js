function PicODE() {
   
    document.getElementById("song two").style.visibility="visible";
    document.getElementById("song one").style.visibility="hidden";
    document.getElementById("song three").style.visibility="hidden";
    document.getElementById("song four").style.visibility="hidden";

    document.getElementById("songB twoB").style.visibility="visible";
    document.getElementById("songB oneB").style.visibility="hidden";
    document.getElementById("songB threeB").style.visibility="hidden";
    document.getElementById("songB fourB").style.visibility="hidden";


    document.getElementById("title").innerText="Ode to the Mets";
    document.getElementById("artist").innerText="The strokes";  

    document.getElementById("audio1").style.visibility="hidden";
    document.getElementById("audio2").style.visibility="visible";
    document.getElementById("audio3").style.visibility="hidden";
    document.getElementById("audio4").style.visibility="hidden";
   
    if(document.getElementById("play2").innerText==="▶" || document.getElementById("play2a").innerText==="▶"){
    document.getElementById("play2").innerText="| |";
    document.getElementById("play1").innerText="▶";
    document.getElementById("play3").innerText="▶";
    document.getElementById("play4").innerText="▶";

    document.getElementById("play2a").innerText="| |";
    document.getElementById("play1a").innerText="▶";
    document.getElementById("play3a").innerText="▶";
    document.getElementById("play4a").innerText="▶";

    const a=document.getElementById("audio1");
    const b=document.getElementById("audio2");
    const c=document.getElementById("audio3");
    const d=document.getElementById("audio4");

    a.pause();
    d.pause();
    c.pause();

    b.play();
    }
    else{
        document.getElementById("play2").innerText="▶";
        document.getElementById("play2a").innerText="▶";
        const b=document.getElementById("audio2");
        b.pause();
    }
}

function PicDoI() {
   
    document.getElementById("song one").style.visibility="visible";
    document.getElementById("song two").style.visibility="hidden";
    document.getElementById("song three").style.visibility="hidden";
    document.getElementById("song four").style.visibility="hidden";

    document.getElementById("songB twoB").style.visibility="hidden";
    document.getElementById("songB oneB").style.visibility="visible";
    document.getElementById("songB threeB").style.visibility="hidden";
    document.getElementById("songB fourB").style.visibility="hidden";

    document.getElementById("title").innerText="Do I wanna know";
    document.getElementById("artist").innerText="Arctic Monkeys";  

    document.getElementById("audio2").style.visibility="hidden";
    document.getElementById("audio1").style.visibility="visible";
    document.getElementById("audio3").style.visibility="hidden";
    document.getElementById("audio4").style.visibility="hidden";


    if( document.getElementById("play1").innerText==="▶" || document.getElementById("play1a").innerText==="▶"){
    document.getElementById("play1").innerText="| |";
    document.getElementById("play2").innerText="▶";
    document.getElementById("play3").innerText="▶";
    document.getElementById("play4").innerText="▶";

    document.getElementById("play1a").innerText="| |";
    document.getElementById("play2a").innerText="▶";
    document.getElementById("play3a").innerText="▶";
    document.getElementById("play4a").innerText="▶";

    const a=document.getElementById("audio1");
    const b=document.getElementById("audio2");
    const c=document.getElementById("audio3");
    const d=document.getElementById("audio4");


    b.pause();
    d.pause();
    c.pause();
    a.play();
    }
    else{
        document.getElementById("play1").innerText="▶";
        document.getElementById("play1a").innerText="▶";
        const a=document.getElementById("audio1");
        a.pause();
    }
}

function PicJap() {
   
    document.getElementById("song three").style.visibility="visible";
    document.getElementById("song one").style.visibility="hidden";
    document.getElementById("song two").style.visibility="hidden";
    document.getElementById("song four").style.visibility="hidden";

    document.getElementById("songB twoB").style.visibility="hidden";
    document.getElementById("songB oneB").style.visibility="hidden";
    document.getElementById("songB threeB").style.visibility="visible";
    document.getElementById("songB fourB").style.visibility="hidden";

    document.getElementById("title").innerText="Japanese Denim";
    document.getElementById("artist").innerText="Daniel Caeser";  

    document.getElementById("audio1").style.visibility="hidden";
    document.getElementById("audio3").style.visibility="visible";
    document.getElementById("audio2").style.visibility="hidden";
    document.getElementById("audio4").style.visibility="hidden";


    if(document.getElementById("play3").innerText==="▶" || document.getElementById("play3a").innerText==="▶"){
    document.getElementById("play3").innerText="| |";
    document.getElementById("play2").innerText="▶";
    document.getElementById("play1").innerText="▶";
    document.getElementById("play4").innerText="▶";

    document.getElementById("play3a").innerText="| |";
    document.getElementById("play2a").innerText="▶";
    document.getElementById("play1a").innerText="▶";
    document.getElementById("play4a").innerText="▶";

    const a=document.getElementById("audio1");
    const b=document.getElementById("audio2");
    const c=document.getElementById("audio3");
    const d=document.getElementById("audio4");


    a.pause();
    d.pause();
    b.pause();
    c.play();
    }
    else{
        document.getElementById("play3").innerText="▶";
        document.getElementById("play3a").innerText="▶";
        const c=document.getElementById("audio3");
        c.pause();
    }
}

function PicHig() {
   
    document.getElementById("song four").style.visibility="visible";
    document.getElementById("song one").style.visibility="hidden";
    document.getElementById("song two").style.visibility="hidden";
    document.getElementById("song three").style.visibility="hidden";

    document.getElementById("songB twoB").style.visibility="hidden";
    document.getElementById("songB oneB").style.visibility="hidden";
    document.getElementById("songB threeB").style.visibility="hidden";
    document.getElementById("songB fourB").style.visibility="visible";

    document.getElementById("title").innerText="High and Dry";
    document.getElementById("artist").innerText="Radiohead";  

    document.getElementById("audio1").style.visibility="hidden";
    document.getElementById("audio4").style.visibility="visible";
    document.getElementById("audio3").style.visibility="hidden";
    document.getElementById("audio2").style.visibility="hidden";


    if(document.getElementById("play4").innerText==="▶" || document.getElementById("play4a").innerText==="▶"){
    document.getElementById("play4").innerText="| |";
    document.getElementById("play2").innerText="▶";
    document.getElementById("play3").innerText="▶";
    document.getElementById("play1").innerText="▶";

    document.getElementById("play4a").innerText="| |";
    document.getElementById("play2a").innerText="▶";
    document.getElementById("play3a").innerText="▶";
    document.getElementById("play1a").innerText="▶";

    const a=document.getElementById("audio1");
    const b=document.getElementById("audio2");
    const c=document.getElementById("audio3");
    const d=document.getElementById("audio4");


    a.pause();
    b.pause();
    c.pause();
    d.play();
    }
    else{
        document.getElementById("play4").innerText="▶";
        document.getElementById("play4a").innerText="▶";
        const d=document.getElementById("audio4");
        d.pause();
    }
}

function favouritees(){
    document.getElementById("favDiv").style.visibility="visible";
}

function hideFavDiv(){
    document.getElementById("favDiv").style.visibility="hidden";
}

function options(){
    document.getElementById("threeDotsDiv").style.visibility="visible";
}

function hideDotsDiv(){
    document.getElementById("threeDotsDiv").style.visibility="hidden";
}

function Settings(){
    document.getElementById("SettingsDiv").style.visibility="visible";
}

function hideSetsDiv(){
    document.getElementById("SettingsDiv").style.visibility="hidden";
}

function fullList(){
    function findVisibleImage() {
    
        const images = document.querySelectorAll('img');
        
    
        for (const image of images) {
            const style = window.getComputedStyle(image);
            if (style.visibility !== 'hidden' && Element.id!="songBig") {
                const songImage = document.getElementById(image.id).src;
    document.getElementById("songBig").src = songImage;
    document.querySelectorAll('audio').forEach(audio => {
        audio.style.visibility = "hidden";
    });
    
                
            }
            
        }}
        setInterval(findVisibleImage, 1);
        
    document.getElementById("listDiv").style.visibility="hidden";
    document.getElementById("playingDiv").style.visibility="hidden";
    document.getElementById("listDivBig").style.visibility="visible";
    document.getElementById("listDiv").style.transition="0s";
   
    document.getElementById("premium").style.visibility="hidden";

}


function closeListBig(){
    document.getElementById("listDiv").style.visibility="visible";
    document.getElementById("playingDiv").style.visibility="visible";
    document.getElementById("listDivBig").style.visibility="hidden";
    document.getElementById("listDiv").style.transition="0.5s";
    document.getElementById("premium").style.visibility="visible";
}


function findVisibleImage() {
    
    const images = document.querySelectorAll('img');
    

    for (const image of images) {
        const style = window.getComputedStyle(image);
        if (style.visibility !== 'hidden') {
            return image; 
        }
    }}

    