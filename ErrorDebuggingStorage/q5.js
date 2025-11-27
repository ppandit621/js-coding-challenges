// Q5. Cookie Creator
// Write code to set a cookie "token=abc123" that expires in 24 hours.

const date = new Date();
date.setTime(date.getTime() + 24 * 60 * 60 * 1000); 
document.cookie = "token=abc123; expires=" + date.toUTCString() + "; path=/";