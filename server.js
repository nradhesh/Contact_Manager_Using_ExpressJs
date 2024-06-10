const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const port = process.env.PORT || 5000;
connectDb();
app.use(express.json());

app.use("/api/users", require("./routes/userRoutes")); // Note the relative path
app.use("/api/contacts", require("./routes/contactRoutes")); // Note the relative path

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
