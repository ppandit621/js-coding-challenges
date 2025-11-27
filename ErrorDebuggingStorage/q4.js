// Q4. Storage Setter
// Store the object {theme:"dark", logged:true} in:
// localStorage
// sessionStorage
// Convert to/from JSON properly

const userSettings = { theme: "dark", logged: true };

localStorage.setItem("settings", JSON.stringify(userSettings));
const storedLocal = JSON.parse(localStorage.getItem("settings"));
console.log("From localStorage:", storedLocal);

sessionStorage.setItem("settings", JSON.stringify(userSettings));
const storedSession = JSON.parse(sessionStorage.getItem("settings"));
console.log("From sessionStorage:", storedSession);