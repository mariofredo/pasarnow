const port = process.env.PORT || 5050;
const app = require("../app");
app.listen(port, () => {
  console.log(`running in port ${port}`);
});
