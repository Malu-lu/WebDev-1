alert("Hello World");

document.addEventListener("DOMContentLoaded", function() {

    console.log("DOM is ready");
});


    // JavaScript for the dropdown functionality
    document.addEventListener('DOMContentLoaded', function() {
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('click', function() {
                this.querySelector('.dropdown-content').classList.toggle('show');
            });
        });

        // Close the dropdown if the user clicks outside of it
        window.addEventListener('click', function(event) {
            dropdowns.forEach(dropdown => {
                if (!dropdown.contains(event.target)) {
                    dropdown.querySelector('.dropdown-content').classList.remove('show');
                }
            });
        });
    });


const isStudent = true;
const isTeacher = false;

if (isStudent || isTeacher) { // Checking if user is student or teacher
  console.log("You are either a student or a teacher.");
} else {
  console.log("You are neither a student nor a teacher.");
}