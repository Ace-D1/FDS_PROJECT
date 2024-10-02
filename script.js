const jobTitleMapping = {
    // Engineering Roles
    'Software Engineer': 'Engineering',
    'Software Engineer Manager': 'Engineering',
    'Full Stack Engineer': 'Engineering',
    'Senior Software Engineer': 'Engineering',
    'Back end Developer': 'Engineering',
    'Front end Developer': 'Engineering',
    'Software Developer': 'Engineering',
    'Web Developer': 'Engineering',
    'Junior Software Developer': 'Engineering',
    'Junior Software Engineer': 'Engineering',
    'Junior Web Developer': 'Engineering',
    
    // Data & Analytics Roles
    'Data Scientist': 'Data & Analytics',
    'Data Analyst': 'Data & Analytics',
    'Research Scientist': 'Data & Analytics',
    'Senior Data Scientist': 'Data & Analytics',
    'Junior Data Analyst': 'Data & Analytics',
    'Director of Data Science': 'Data & Analytics',
    'Financial Analyst': 'Data & Analytics',
    
    // Managerial Roles
    'Product Manager': 'Management',
    'Operations Manager': 'Management',
    'Marketing Manager': 'Management',
    'Senior Project Engineer': 'Management',
    'Financial Manager': 'Management',
    'Human Resources Manager': 'Management',
    
    // Marketing & Sales Roles
    'Marketing Coordinator': 'Marketing & Sales',
    'Marketing Analyst': 'Marketing & Sales',
    'Sales Associate': 'Marketing & Sales',
    
    // HR & Operations Roles
    'Human Resources Coordinator': 'HR & Operations Roles',
    'Senior HR Generalist': 'HR & Operations Roles',
    
    // Creative Roles
    'Graphic Designer': 'Creative',
    'Product Designer': 'Creative',
    
    // Other
    'Project Manager': 'Management'
};

const jobRoleSelect = document.getElementById('job-role');
const jobTitleSelect = document.getElementById('job-title');

// Add event listener to job role dropdown
jobRoleSelect.addEventListener('change', () => {
    const selectedRole = jobRoleSelect.value;
    jobTitleSelect.innerHTML = '<option value="" disabled selected>Select a job title</option>'; // Reset job title dropdown

    // Enable job title dropdown
    jobTitleSelect.disabled = false; // Remove the disabled state

    // Populate job titles based on the selected job role
    for (const title in jobTitleMapping) {
        if (jobTitleMapping[title] === selectedRole.replace('_', ' ')) {
            const option = document.createElement('option');
            option.value = title;
            option.textContent = title;
            jobTitleSelect.appendChild(option);
        }
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
