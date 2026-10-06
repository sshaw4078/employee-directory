import express from "express";
const app = express();
export default app;
 

const employees = [
  { id: 1, name: "Ada Lovelace" },
  { id: 2, name: "Grace Hopper" },
  { id: 3, name: "Alan Turing" },
  { id: 4, name: "Margaret Hamilton" },
  { id: 5, name: "Linus Torvalds" },
];
 

app.get("/", (req, res) => {
  res.send("Hello employees!");
});
 

app.get("/employees", (req, res) => {
  res.send(employees);
});

app.get("/employees/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  res.send(employees[randomIndex]);
});
 
app.get("/employees/:id", (req, res) => {
  const employee = employees.find((e) => e.id === Number(req.params.id));
  if (employee) {
    res.send(employee);
  } else {
    res.status(404).send("Employee not found");
  }
});