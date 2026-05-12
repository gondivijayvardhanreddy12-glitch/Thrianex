fetch("http://localhost:5000/projects")
.then(response => response.json())
.then(data => {

    const projectList = document.getElementById("project-list");

    data.forEach(project => {

        const div = document.createElement("div");

        div.classList.add("project-card");

        div.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;

        projectList.appendChild(div);
    });
});
    {
        title: "Face Recognition",
        description: "AI project using OpenCV"
    },
    {
        title: "Job Board",
        description: "Full stack job portal"
    }
];

const projectList = document.getElementById("project-list");

projects.forEach(project => {
    const div = document.createElement("div");

    div.classList.add("project-card");

    div.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
    `;

    projectList.appendChild(div);
});