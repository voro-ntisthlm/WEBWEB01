/*
    This will change the "hero" text on the screen, it is a lot of spagetti, cause manipulating the dom in the
    way I want is... annoying and this works.
*/



var lptImgSrc = ["Img/web-html.JPG","Img/cpp-standalone.JPG"]; 

var lpt = document.getElementById("landingPageText");


async function changeLandingPage(){
    
    while (true) {
        
    lptHTML();
    await sleep(10000);
    lptVue();
    await sleep(10000);
    lptDesktop();
    await sleep(10000);
    }
}


function lptHTML(){
    lpt.innerHTML = null;

    /* To much spaggeti*/
    /*
        var Ph1 = document.createElement("h1");
        var Pb1 = document.createElement("b");
        var Pm1 = document.createTextNode(platforms[0]);
        
        Pb1.style.color = "var(--Cpp)";
        Pb1.appendChild(Pm1);
        Ph1.innerText = "Developing for ";
        Ph1.appendChild(Pb1);

        
        var Ph2 = document.createElement("h1");
        
        var Pb2a = document.createElement("b");
        var Pb2b = document.createElement("b");
        var Pb2c = document.createElement("b");
        
        var Pm2a = document.createTextNode(languages[0] + ", ");
        var Pm2b = document.createTextNode(languages[1]+ ", ");
        var Pm2c = document.createTextNode(languages[2]);
        

        Pb2a.style.color = "var(--Html)";
        Pb2b.style.color = "var(--CSS)";
        Pb2c.style.color = "var(--JS)";

        Pb2a.appendChild(Pm2a);
        Pb2b.appendChild(Pm2b);
        Pb2c.appendChild(Pm2c);
        
        Ph2.innerText = "With ";
        
        Ph2.appendChild(Pb2a);
        Ph2.appendChild(Pb2b);
        Ph2.appendChild(Pb2c);


        var Ph3 = document.createElement("h1");
        var Pb3 = document.createElement("b");
        var Pm3 = document.createTextNode(years[0]);
        
        Pb3.style.color = "lightgreen";
        Pb3.appendChild(Pm3);
        Ph3.innerText = "Since ";
        Ph3.appendChild(Pb3);
    */

    //This is very simple but the above way (took 1hr to figure out) has way too much spagetti. 

    lpt.innerHTML = 
    '<h1>Developing for <b style="color: cornflowerblue;" id="platform">The Web</b></h1>' +
    '<h1>With <b style="color:var(--Html);" id="language">HTML</b>, <b style="color:var(--CSS);" id="language">CSS</b>, <b style="color:var(--JS);" id="language">Javascript</b></h1>' + 
    '<h1>Since <b style="color:orange;" id="year">2017</b></h1>';
}

function lptVue(){
    lpt.innerHTML = 
    '<h1>Developing for <b style="color: cornflowerblue;" id="platform">The Web</b></h1>' +
    '<h1>With <b style="color:var(--Vue);" id="language">Vue.js</b></h1>' + 
    '<h1>Since <b style="color:orange;" id="year">2019</b></h1>';
}

function lptDesktop(){
    lpt.innerHTML = 
    '<h1>Developing for <b style="" id="platform">Desktop</b></h1>' +
    '<h1>With <b style="color:var(--Cpp);" id="language">C++</b>, <b style="color:var(--Cs);" id="language">C#</b></h1>' + 
    '<h1>Since <b style="color:orange;" id="year">2015</b></h1>';
}



changeLandingPage();



function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
}