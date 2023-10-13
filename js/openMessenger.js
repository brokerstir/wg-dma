// Function to handle link click
function handleMessengerLinkClick(event) {
  event.preventDefault();  // Prevent the default link behavior

  // Check if Facebook Messenger app is available
  const isMessengerAppAvailable = navigator.userAgent.match(/FBAN|FBMESSENGER/g);

  // Define the user ID or username (replace with actual user ID or username)
  const userId = 'woogemllc';

  // Build the Facebook Messenger app link
  const messengerAppLink = `fb-messenger://user-thread/${userId}`;

  // Redirect to Facebook Messenger app or fallback link
  if (isMessengerAppAvailable) {
    window.location.href = messengerAppLink;  // Open in Messenger app
  } else {
    // Fallback link (open in browser)
    window.location.href = `https://www.messenger.com/t/${userId}`;
  }
}

// Attach event listener to the link
const messengerLink = document.getElementById('messengerLink');
messengerLink.addEventListener('click', handleMessengerLinkClick);
