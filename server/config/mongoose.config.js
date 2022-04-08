const mongoose = require("mongoose");
const productDb = "productDb";
//productDb is the database name, it will be created if it does not exist.

mongoose
  .connect(`mongodb://localhost/${productDb}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    console.log(`Established a connection to the database ${productDb}`)
  )
  .catch((err) =>
    console.log("Something went wrong when connecting to the database", err)
  );
