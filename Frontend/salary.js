// Mapping of job roles to job titles
const jobTitles = {
    "Engineering": [
        "Software Engineer",
        "Civil Engineer",
        "Mechanical Engineer",
        "Electrical Engineer"
    ],
    "Data & Analytics": [
        "Data Analyst",
        "Data Scientist",
        "Data Engineer",
        "Business Intelligence Analyst"
    ],
    "Management": [
        "Project Manager",
        "Product Manager",
        "Operations Manager",
        "HR Manager"
    ],
    "Marketing & Sales": [
        "Marketing Manager",
        "Sales Executive",
        "Digital Marketing Specialist",
        "Brand Manager"
    ],
    "HR & Operations Roles": [
        "HR Specialist",
        "Recruiter",
        "Operations Coordinator",
        "Training Manager"
    ],
    "Creative Roles": [
        "Graphic Designer",
        "Content Writer",
        "Video Producer",
        "UX/UI Designer"
    ]
};

// Populate job titles based on selected job role
document.getElementById('job-role').addEventListener('change', function() {
    const jobRole = this.value;
    const jobTitleSelect = document.getElementById('job-title');

    // Clear previous options
    jobTitleSelect.innerHTML = '<option value="" disabled selected>Select a job title</option>';

    // Populate new options based on selected job role
    if (jobTitles[jobRole]) {
        jobTitles[jobRole].forEach(function(title) {
            const option = document.createElement('option');
            option.value = title;
            option.textContent = title;
            jobTitleSelect.appendChild(option);
        });
    }
});

// Handle form submission
document.getElementById('job-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission to handle layout change

    // Shift container to the left
    const container = document.getElementById('job-form-container');
    container.classList.add('shift-left');

    // Show the image
    const image = document.getElementById('role-image');
    image.classList.add('show-image'); // Show the image

    // Display selected job title in the selected-job div
    const jobRole = document.getElementById('job-role').value;
    const jobTitle = document.getElementById('job-title').value;
    const selectedJobDiv = document.getElementById('selected-job');
    selectedJobDiv.textContent = `Selected Job: ${jobRole} - ${jobTitle}`;
});
