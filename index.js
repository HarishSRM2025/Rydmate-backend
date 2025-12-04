const express = require("express");
const app = express();
const sequelize = require("./sequelize");

app.use(express.json());

// Auto create tables
sequelize.sync().then(() => console.log("Tables Ready!"));

// Routes
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/driver", require("./routes/driverRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/trip", require("./routes/tripRoutes"));

app.listen(3000, () => console.log("Server running on 3000"));
