let users = [
    { name: "Alice", role: "admin", active: false },
    { name: "Bob", role: "user", active: true },
    { name: "Charlie", role: "moderator", active: true }
  ];
  
  for (let i in users) {
    let user = users[i];
    let message = "";
  
    if (user.role === "admin") {
      message = user.active ? "Admin Access Granted" : "Admin Access Revoked";
    } else if (user.role === "user") {
      message = user.active ? "User Access Granted!" : "User Access Revoked";
    } else {
      message = "Access Denied";
    }
  
    console.log(message);
  }