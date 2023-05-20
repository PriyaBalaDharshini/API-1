//Heading
var heading=document.createElement("h1");
heading.innerHTML="Thirukkural";
heading.style.textAlign="center";
heading.style.marginTop="50px";
document.body.append(heading);

//div to store input field and submit button
var div=document.createElement("div");
div.style.textAlign="center";

//input field
var input=document.createElement("input");
input.setAttribute("type","number");
input.setAttribute("id","thirukkural");
input.setAttribute("placeholder","Enter num from 1 to 1330");
input.style.marginTop="20px";
input.style.width="20%";
input.style.textAlign="center";

//linebreak
var linebreak=document.createElement("br");

//submit button
//<button type="button" class="btn btn-info">Info</button>
var button = document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn", "btn-info");
button.innerHTML="Click to View";
button.style.marginTop="20px";
button.addEventListener("click",thirukkural);

div.append(input, linebreak, button);
document.body.append(div);

async function thirukkural(){
    try{
        let res=document.getElementById("thirukkural").value;
        /* console.log(res); */
        let url=`https://api-thirukkural.vercel.app/api?num=${res}`;
        let result = await fetch(url);
        let result1 = await result.json();
        /* console.log(result1) */
        div.innerHTML=`
        Number: ${result1.number}<br>
        Thirukkural: ${result1.line1} <br>
        ${result1.line2} <br>
        Section: ${result1.sect_tam}<br>
        Chapter: ${result1.chapgrp_tam}<br>
        Explanation: ${result1.tam_exp}`
        ;
    }
    catch(error){
        alert("The entered number is invalid. Enter num from 1 to 1330");
    }
    }
