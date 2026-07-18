const url = "data/members.json";
const membersContainer = document.querySelector("#members");

async function getMembers() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const members = await response.json();

        displayMembers(members);

    } catch (error) {
        console.error("Error loading members:", error);

        membersContainer.innerHTML =
            "<p>Unable to load member directory.</p>";
    }
}

function displayMembers(members) {

    membersContainer.innerHTML = "";

    members.forEach(member => {

        const card = document.createElement("section");

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}" loading="lazy">

            <h3>${member.name}</h3>

            <p><strong>Address:</strong><br>${member.address}</p>

            <p><strong>Phone:</strong><br>${member.phone}</p>

            <p>
                <a href="${member.website}" target="_blank">
                    Visit Website
                </a>
            </p>

            <p>${member.description}</p>

            <p><strong>Membership:</strong> ${member.membership}</p>
        `;

        membersContainer.appendChild(card);

    });

}

getMembers();

document.querySelector("#grid").addEventListener("click", () => {

    membersContainer.classList.add("grid");
    membersContainer.classList.remove("list");

});

document.querySelector("#list").addEventListener("click", () => {

    membersContainer.classList.add("list");
    membersContainer.classList.remove("grid");

});