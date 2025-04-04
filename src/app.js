const express = require("express");
const signupRoute = require("./routes/signup");
const loginRoute = require("./routes/login")
const userRoute = require("./routes/user"); // Import the user route
const childrenRoute = require("./routes/children"); // Import the children route
const eldersRoute = require("./routes/elders"); // Import the elders route

const bodyParser = require("body-parser");
const cors = require("cors");
const createAdminAccount = require("./scripts/admin"); // Import the admin account creation script
require("./configuration/dbConfig"); // Ensure the database connection is established

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

createAdminAccount(); // Call the function to create the admin account

app.use("/user", signupRoute);
app.use("/auth", loginRoute); // Use the login route
app.use("/api", userRoute); // Use the user route
app.use("/api", childrenRoute); // Use the children route
app.use("/api", eldersRoute); // Use the elders route

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});