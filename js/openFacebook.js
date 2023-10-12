// Function to check if Facebook app is available
function isFacebookAppAvailable() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return userAgent.indexOf("FBAN") > -1 || userAgent.indexOf("FBAV") > -1;
}

// Function to handle link click
function handleLinkClick(event) {
  event.preventDefault();  // Prevent the default link behavior

  // Check if Facebook app is available
  if (isFacebookAppAvailable()) {
    window.location.href = "fb://page/154610617726433";  // Open in Facebook app
  } else {
    window.location.href = "https://www.facebook.com/154610617726433";  // Open in browser
  }
}

// Attach event listener to the link
const facebookLink = document.getElementById("facebookLink");
facebookLink.addEventListener("click", handleLinkClick);
