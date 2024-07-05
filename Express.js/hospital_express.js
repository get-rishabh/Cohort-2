const express = require("express");
const app = express();
app.use(express.json());

const user = {
  name: "CNL",
  kidney: [{ health: "Healthy" }, { health: "Unhealthy" }],
};

//usually gets data from query parameters
app.get("/", function (req, res) {
  let Number_of_Unhealthy_Kidneys = 0;
  const patient = user.name;
  let patient_kidney = user.kidney;
  for (let k in patient_kidney) {
    console.log(patient_kidney[k].health);
    if (patient_kidney[k].health === "Unhealthy")
      Number_of_Unhealthy_Kidneys += 1;
  }
  let Number_of_Healthy_Kidneys =
    user.kidney.length - Number_of_Unhealthy_Kidneys;

  res.json({
    patient,
    Number_of_Unhealthy_Kidneys,
    Number_of_Healthy_Kidneys,
  });
});

app.post("/", function (req, res) {
  console.log("POST REQUEST SENT !!!");
  const h = req.body;
  user.kidney.push(h);
  res.json({ msg: "KIDNEY SENT" });
});

app.put("/", function (req, res) {
  console.log("POST REQUEST SENT !!!");
  let newKidney = [];
  let c = 0;
  for (let i = 0; i < user.kidney.length; i++) {
    if (user.kidney[i].health === "Unhealthy") c++;
  }
  if (c == 0) {
    res.status(400).json({ msg: "No Unhealthy Kidney Found" });
  } else {
    for (let i = 0; i < user.kidney.length; i++) {
      if (user.kidney[i].health === "Healthy")
        newKidney.push({ health: "Healthy" });
    }
    user.kidney = newKidney;
    res.json({
      msg: "KIDNEY UPDATED",
    });
  }
});

app.delete("/", function (req, res) {
  user.kidney = [];
  res.json({
    msg: "KIDNEY DELETED",
  });
});

console.log("Server Running !!!");
app.listen(9000);
