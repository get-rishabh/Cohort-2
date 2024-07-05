const fs = require("fs");
const express = require("express");
const app = express();
app.use(express.json());

app.get("/:fileName", function (req, res) {
  const file_name = req.params.fileName;
  const directoryPath = "./dir";

  fs.readdir(directoryPath, (err, files) => {
    console.log(files);

    if (files.includes("sample.txt")) {
      fs.readFile(`${directoryPath}/sample.txt`, "utf-8", (err, data) => {
        
        if (err) {
          console.error(err);
          return res.status(500).json({ error: "Unable to read file" });
        }
        res.status(200).json(data);
      });
    } 
    
    else {
      res.status(404).json({ error: "File not found" });
    }
  });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
