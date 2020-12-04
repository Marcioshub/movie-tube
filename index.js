const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

const movies = [
  "creepshow",
  "donnie-darko",
  "vhs",
  "labyrinth",
  "ghost-stories",
  "it",
  "the-thing",
  "fifty-shades-of-grey",
  "little-nicky",
  "charles-manson",
  "jeffrey-dahmer",
  "john-wayne-gacy",
  "son-of-sam",
  "columbine-high-school",
  "black-widow",
];

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("/api/search/:id", (req, res) => {
  for (i of movies) {
    if (i.toString() === req.params.id) {
      return res.json({
        success: true,
      });
    }
  }

  // false
  res.json({
    success: false,
  });
});

app.get("/api/stream/:name", (req, res) => {
  let path = "./videos/";

  switch (req.params.name) {
    case "creepshow":
      path = path + "creepshow.mp4";
      break;

    case "donnie-darko":
      path = path + "donnie-darko.mp4";
      break;

    case "vhs":
      path = path + "vhs.mp4";
      break;

    case "labyrinth":
      path = path + "labyrinth.mp4";
      break;

    case "ghost-stories":
      path = path + "ghost-stories.mp4";
      break;

    case "the-thing":
      path = path + "the-thing.mp4";
      break;

    case "fifty-shades-of-grey":
      path = path + "fifty-shades-of-grey.mp4";
      break;

    case "little-nicky":
      path = path + "little-nicky.mp4";
      break;

    case "black-widow":
      path = path + "black-widow.mp4";
      break;

    case "charles-manson":
      path = path + "charles-manson.mp4";
      break;

    case "columbine-high-school":
      path = path + "columbine-high-school.mp4";
      break;

    case "jeffrey-dahmer":
      path = path + "jeffrey-dahmer.mp4";
      break;

    case "john-wayne-gacy":
      path = path + "john-wayne-gacy.mp4";
      break;

    case "son-of-sam":
      path = path + "son-of-sam.mp4";
      break;

    default:
      path = path + "it.mp4";
      break;
  }

  //const path = `./videos/donnie-darko.mkv`;
  const stat = fs.statSync(path);
  const fileSize = stat.size;
  const range = req.headers.range;

  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    const chuckSize = end - start + 1;
    const file = fs.createReadStream(path, { start, end });
    const head = {
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chuckSize,
      "Content-Type": "video/mp4",
    };

    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = {
      "Content-Length": fileSize,
      "Content-Type": "video/mp4",
    };
    res.writeHead(200, head);
    fs.createReadStream(path).pipe(res);
  }
});

// client side
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

app.listen(5011, () => console.log("Listening on port 5011"));
