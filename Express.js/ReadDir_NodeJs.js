const fs = require("fs");

fs.readdir("dir", (err, files) => {
  if (err) console.log(err.message);
  else {
    console.log(files);
  }
});
