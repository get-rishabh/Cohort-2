const express = require("express");
const app = express();

function usercheck(req, res, next) {
  if (req.headers.username != "CNL" && req.headers.password != "admin")
    res.status(401).json({
      msg: "Invalid Credentials !!!",
    });
    else{
        next();
    }
}

function kidneycheck(req, res, next) {
    if (req.query.kidney == 0){
        res.status(406).json({
            msg : "❌ No Kidney Found !!!"
        })
    }
    else if (req.query.kidney < 1 || req.query.kidney > 2 )
    res.status(403).json({
      msg: "Invalid Kidney Info !!!",
    });
    else{
        next();
    }
}

app.get("/health-checkup", usercheck, kidneycheck, (req, res) => {
  res.status(200).json({
    msg: "Kidney(s) : Healthy ✅",
  });
});
app.listen(3000);