const jobTitles = {
    'Engineering': ['Software Engineer', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer'],
    'Data & Analytics': ['Data Scientist', 'Data Analyst', 'Machine Learning Engineer', 'AI Researcher'],
    'Management': ['Project Manager', 'Agile Coach', 'Scrum Master', 'Program Manager'],
    'Marketing & Sales': ['Marketing Coordinator', 'Sales Associate'],
    'HR & Operations Roles': ['Human Resources Coordinator', 'Senior HR Generalist'],
    'Creative Roles': ['Graphic Designer', 'Product Designer']
};

const jobTitleSelect = document.getElementById('job-title');
const jobRoleSelect = document.getElementById('job-role');
const submitButton = document.getElementById('submit');
const selectedJobDisplay = document.getElementById('selected-job');

// Event listener for job role selection
jobRoleSelect.addEventListener('change', function () {
    const selectedRole = this.value;
    jobTitleSelect.innerHTML = '<option value="" disabled selected>Select a job title</option>'; // Reset job titles

    if (selectedRole && jobTitles[selectedRole]) {
        const titles = jobTitles[selectedRole];
        titles.forEach(title => {
            const option = document.createElement('option');
            option.value = title;
            option.textContent = title;
            jobTitleSelect.appendChild(option);
        });
        jobTitleSelect.disabled = false; // Enable job title select
    } else {
        jobTitleSelect.disabled = true; // Disable job title select if no role is selected
    }
});

// Event listener for submit button
submitButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission
    const selectedTitle = jobTitleSelect.value;
    const selectedRole = jobRoleSelect.value;

    if (selectedTitle && selectedRole) {
        selectedJobDisplay.textContent = `You selected: ${selectedTitle} - ${selectedRole}`;
    } else {
        selectedJobDisplay.textContent = 'Please select both a job title and a job role.';
    }
});

