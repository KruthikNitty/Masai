let tasks = ["Complete report", "Email client", "Team meeting", "Review code", "Plan project"];

tasks = tasks.slice(1); 
tasks = ["Urgent: Fix bug", "Urgent: Call supplier", ...tasks]; 
tasks[tasks.length - 1] = "Submit invoice"; 

console.log(tasks);
