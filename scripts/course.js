const courses = [
    {
        subject: "WDD",
        number: 130,
        title: "Web Fundamentals",
        credits: 2,
        completed: true
    },
    {
        subject: "WDD",
        number: 131,
        title: "Dynamic Web Fundamentals",
        credits: 2,
        completed: true
    },
    {
        subject: "WDD",
        number: 231,
        title: "Web Frontend Development I",
        credits: 2,
        completed: false
    },
    {
        subject: "CSE",
        number: 110,
        title: "Programming Building Blocks",
        credits: 2,
        completed: true
    },
    {
        subject: "CSE",
        number: 111,
        title: "Programming with Functions",
        credits: 2,
        completed: true
    },
    {
        subject: "CSE",
        number: 210,
        title: "Programming with Classes",
        credits: 2,
        completed: true
    }
];

const courseContainer = document.querySelector("#courseContainer");
const creditTotal = document.querySelector("#creditTotal");

// Display Courses
function displayCourses(courseList) {
    courseContainer.innerHTML = "";

    courseList.forEach(course => {
        const card = document.createElement("div");
        card.classList.add("course-card");

        if (course.completed) {
            card.classList.add("completed");
        }

        card.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
            <p><strong>${course.title}</strong></p>
            <p>Credits: ${course.credits}</p>
            <p>Status: ${course.completed ? "✅ Completed" : "📘 In Progress"}</p>
        `;

        courseContainer.appendChild(card);
    });

    // Total Credits using reduce()
    const totalCredits = courseList.reduce((sum, course) => {
        return sum + course.credits;
    }, 0);

    creditTotal.textContent = `Total Credits: ${totalCredits}`;
}

// Initial display
displayCourses(courses);

// Filter Buttons
document.querySelector("#allCourses").addEventListener("click", () => {
    displayCourses(courses);
});

document.querySelector("#wddCourses").addEventListener("click", () => {
    const wddCourses = courses.filter(course => course.subject === "WDD");
    displayCourses(wddCourses);
});

document.querySelector("#cseCourses").addEventListener("click", () => {
    const cseCourses = courses.filter(course => course.subject === "CSE");
    displayCourses(cseCourses);
});