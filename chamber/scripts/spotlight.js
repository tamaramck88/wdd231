const url = "data/members.json";

async function getSpotlights(){

const response = await fetch(url);

const data = await response.json();

const members =
data.filter(member =>
member.membership === "Gold" ||
member.membership === "Silver"
);

members.sort(() => Math.random() - 0.5);

displaySpotlights(members.slice(0,3));

}

function displaySpotlights(members){

const container =
document.querySelector("#spotlight-container");

container.innerHTML="";

members.forEach(member=>{

const card=document.createElement("section");

card.innerHTML=`

<h3>${member.name}</h3>

<img src="${member.image}"
alt="${member.name}">

<p>${member.phone}</p>

<p>${member.address}</p>

<p>${member.membership}</p>

<a href="${member.website}" target="_blank">
Visit Website
</a>

`;

container.appendChild(card);

});

}

getSpotlights();