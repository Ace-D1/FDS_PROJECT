const jobTitles = {
    'Engineering': ['Software Engineer', 'Software Engineer Manager', 'Full Stack Engineer', 'Senior Software Engineer', 'Back end Developer', 'Front end Developer', 'Software Developer', 'Web Developer', 'Junior Software Developer', 'Junior Software Engineer', 'Junior Web Developer'],
    'Data & Analytics': ['Data Scientist', 'Data Analyst', 'Research Scientist', 'Senior Data Scientist', 'Junior Data Analyst', 'Director of Data Science', 'Financial Analyst'],
    'Management': ['Product Manager', 'Operations Manager', 'Marketing Manager', 'Senior Project Engineer', 'Financial Manager', 'Human Resources Manager', 'Project Manager'],
    'Marketing & Sales': ['Marketing Coordinator', 'Marketing Analyst', 'Sales Associate'],
    'HR & Operations Roles': ['Human Resources Coordinator', 'Senior HR Generalist'],
    'Creative': ['Graphic Designer', 'Product Designer']
};

const jobRoleSelect = document.getElementById('job-role');
const jobTitleSelect = document.getElementById('job-title');
const submitButton = document.getElementById('submit');
const selectedJobDisplay = document.getElementById('selected-job');

// Add event listener for job role selection
jobRoleSelect.addEventListener('change', function () {
    const selectedRole = this.value;
    jobTitleSelect.innerHTML = '<option value="" disabled selected>Select a job title</option>'; // Reset job titles

    if (selectedRole) {
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
submitButton.addEventListener('click', function () {
    const selectedTitle = jobTitleSelect.value;
    const selectedRole = jobRoleSelect.value;

    if (selectedTitle && selectedRole) {
        selectedJobDisplay.textContent = `You selected: ${selectedTitle} - ${selectedRole}`;
    } else {
        selectedJobDisplay.textContent = 'Please select both a job title and a job role.';
    }
});

// To enable job title dropdown based on job role selection
jobRoleSelect.addEventListener('change', () => {
    const selectedRole = jobRoleSelect.value;
    jobTitleSelect.innerHTML = '<option value="" disabled selected>Select a job title</option>'; // Reset job title dropdown

    // Enable job title dropdown
    jobTitleSelect.disabled = false; // Remove the disabled state

    // Populate job titles based on the selected job role
    if (jobTitles[selectedRole]) {
        jobTitles[selectedRole].forEach(title => {
            const option = document.createElement('option');
            option.value = title;
            option.textContent = title;
            jobTitleSelect.appendChild(option);
        });
    }
});

// Handle form submission
const jobForm = document.getElementById('job-form');
jobForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from submitting
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const jobRole = jobRoleSelect.value;
    const jobTitle = jobTitleSelect.value;

    alert(`Submitted:\nAge: ${age}\nGender: ${gender}\nEducation: ${education}\nExperience: ${experience}\nJob Role: ${jobRole}\nJob Title: ${jobTitle}`);
});
