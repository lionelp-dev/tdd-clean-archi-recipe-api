import fastify from "fastify";

const server = fastify();

const port = 3454;

server.get("/recipes", async (req, res) => {
  res.send("Hello World!");
});

server.listen(port, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
