const app = require('./src/app');

const port = process.env.PORT || 3050;

app.listen(port, () => console.log(`Listening on port ${port}`));
