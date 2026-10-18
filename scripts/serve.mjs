import { createServer } from "node:http";
import { readFile } from "node:fs/promises";

// Local preview server
const files = new Map([
  ["/", ["index.html", "text/html; charset=utf-8"]],
  ["/index.html", ["index.html", "text/html; charset=utf-8"]],
  ["/style.css", ["style.css", "text/css; charset=utf-8"]],
  ["/script.js", ["script.js", "text/javascript; charset=utf-8"]],
]);

const port = Number(process.env.PORT || 4173);
const server = createServer(async (request, response) => {
  const file = files.get(new URL(request.url, "http://localhost").pathname);
  if (!file) {
    response.writeHead(404).end("Not found");
    return;
  }
  try {
    const body = await readFile(new URL(`../src/${file[0]}`, import.meta.url));
    response.writeHead(200, { "Content-Type": file[1], "Cache-Control": "no-store" }).end(body);
  } catch {
    response.writeHead(500).end("Unable to read site file");
  }
});
server.on("error", (error) => { console.error(error.message); process.exitCode = 1; });
server.listen(port, "127.0.0.1", () => console.log(`Local: http://127.0.0.1:${port}`));
