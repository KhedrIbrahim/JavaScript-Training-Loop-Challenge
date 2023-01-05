//Loop Challenge
let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

// Start Challeng Code
let adminCount = myAdmins.indexOf("Stop");
let num = 0;

document.write(`<div>We Have ${adminCount} Admins</div>`);
document.write(`<hr>`);

for (let i = 0 ; i < adminCount ; i++) {    
    document.write(`<div>The Admin For Team ${i + 1} is ${myAdmins[i]}</div>`);
    document.write(`<h2>Team Members:</h2>`);
    for (let j = 0 ; j < myEmployees.length; j++) {
        if (myEmployees[j][0] === myAdmins[i][0]) {
            document.write(`<p>- ${++num } ${myEmployees[j]}</p>`);
        }
    }
    num = 0;
    document.write(`<hr>`);
}

//End Challenge Code
