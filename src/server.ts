import app from "./app";
import config from "./config";
import { initDB } from "./db";

const main = () => {
  initDB();
  app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`);
  });
};

main();

// CONNECTION_STRING="postgresql://neondb_owner:npg_Vj3QXnN5wKEp@ep-flat-cell-at25gyt5.c-9.us-east-1.aws.neon.tech/neondb?sslmode=require"
