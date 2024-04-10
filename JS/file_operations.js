const fs = require("fs");
const http = require("http");

const hello = "hello world";
//console.log("hello:", hello);

const textIn = fs.readFileSync("./input.txt", "utf-8");

//console.log("textIn:", textIn);

const textOut = `${textIn} additional text`;

fs.writeFileSync("output.txt", textOut);

console.log("File Written");

const readIn = fs.readFile("./input.txt", "utf-8", (err, data) => {
  //console.log("data:", data);
});

console.log("file read asynchroniously");

const server = http.createServer((req, res) => {
  console.log("request url:", req.url);
  const pathName = req.url;
  if (pathName === "/overview") {
    res.end("This is OVERVIEW");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("Page not found");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
