// JavaScript code for profile page
// Get the profile card element
const profileCard = document.querySelector('.profile-card');
// Get the name element
const nameElement = profileCard.querySelector('h2');
// Get the age element
const ageElement = profileCard.querySelector('.profile-details p:nth-of-type(1)');
// Get the date of birth element
const dobElement = profileCard.querySelector('.profile-details p:nth-of-type(2)');
// Get the contact number element
const contactElement = profileCard.querySelector('.profile-details p:nth-of-type(3)');
// Update the profile details with the data
function updateProfileDetails(name, age, dob, contact) {
      nameElement.textContent = name;
      ageElement.textContent = `Age: ${age}`;
      dobElement.textContent = `Date of Birth: ${dob}`;
      contactElement.textContent = `Contact: ${contact}`;
}
// Call the function to update the profile detailsupdateProfileDetails('Example Name', 25, '01/01/1996', '9988998899');