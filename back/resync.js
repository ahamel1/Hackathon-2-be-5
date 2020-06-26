const InTakes = require("./models/InTakes");

async function main() {
  await InTakes.sync({ force: true });
}

main();
