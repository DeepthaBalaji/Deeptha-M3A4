const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' }); // this line has to come first since we need to tell where is the config file.
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
