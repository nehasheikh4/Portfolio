// You can add your JavaScript code here for additional functionality or interactions

// Example: Add an event listener to the "Add Project" button
document.addEventListener('DOMContentLoaded', function () {
    const addProjectButton = document.getElementById('add-project-button');

    if (addProjectButton) {
        addProjectButton.addEventListener('click', function () {
            // Redirect to the upload page when the button is clicked
            window.location.href = 'upload.html';
        });
    }
});



