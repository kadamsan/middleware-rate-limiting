const express = require("express");
const app = express();
const port = process.env.PORT || 3000

const {bruteforce} = require("./middleware/rate-limiter")
const routes = require("./routes/routes");

app.use(bruteforce('global', 100, 5))

app.use(routes);

app.listen(port, () => {
console.log(`App running on port ${port}`);
});