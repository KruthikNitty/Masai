let person = { role: "admin", experience: 7, active: true, department: "IT" };

if (person.role === "admin") {
  if (!person.active) {
    console.log("Admin Access Revoked");
  } else if (person.experience > 5) {
    console.log(person.department === "IT" ? "Full IT Admin Access" : "Full General Admin Access");
  } else {
    console.log("Limited Admin Access");
  }
} 
else if (person.role === "manager") {
  if (!person.active) {
    console.log("Manager Access Revoked");
  } else if (person.experience > 3) {
    console.log(person.department === "Sales" ? "Full Sales Manager Access" : "Full Manager Access");
  } else {
    console.log("Limited Manager Access");
  }
} 
else if (person.role === "user") {
  if (!person.active) {
    console.log("User Access Revoked");
  } else {
    console.log(person.department === "Support" ? "Priority Support Access" : "User Access");
  }
} 
else {
  console.log("Invalid Role");
}