const url = "data/members.json";

const members = document.querySelector("#members");

async function getMembers() {

    try {

        const response = await fetch(url);

        const data = await response.json();

        displayMembers(data);

    } catch (error) {

        console.error(error);

    }

}

function displayMembers(data) {

    data.forEach(company => {

        const card = document.createElement("section");

        card.innerHTML = `

        <img src="images/${company.image}" alt="${company.name}" loading="lazy">

        <h3>${company.name}</h3>

        <p>${company.address}</p>

        <p>${company.phone}</p>

        <p><a href="${company.website}" target="_blank">${company.website}</a></p>

        <p>${company.description}</p>

        `;

        members.appendChild(card);

    });

}

getMembers();

document.querySelector("#grid").addEventListener("click", () => {

    members.classList.add("grid");

    members.classList.remove("list");

});

document.querySelector("#list").addEventListener("click", () => {

    members.classList.add("list");

    members.classList.remove("grid");

});