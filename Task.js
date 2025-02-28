const tasks = ["Task1", "Task2", "Task3", "Task4", "Task5"];

for (let i = 0; i < tasks.length - 1; i++) {
  tasks[i] = tasks[i + 1];
}
tasks.length--;

for (let i = tasks.length - 1; i >= 0; i--) {
  tasks[i + 2] = tasks[i];
}
tasks[0] = "High-Priority Task1";
tasks[1] = "High-Priority Task2";

tasks[tasks.length - 1] = "New Last Task";

console.log(tasks);
