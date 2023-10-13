// Get the current URL path and filename
const currentUrl = window.location.pathname;

// Define an array of navbar link hrefs
const navbarLinks = [
  'index.html',
  'web-development.html',
  'online-ads.html',
  'our-mission.html',
  'our-team.html',
  'contact.html'
];

// Loop through each navbar link and add the active class if the href matches the current URL
navbarLinks.forEach((link, index) => {
  const navLink = document.getElementById(`navLink${index}`);
  const footerNavLink = document.getElementById(`footerNavLink${index}`);
  if (currentUrl.endsWith(link)) {
    navLink.classList.add('active');
    footerNavLink.classList.add('active');
  }
});
