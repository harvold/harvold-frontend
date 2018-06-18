const express = require('express');
const helmet = require('helmet');

const apiRouter = require('./api/router');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(helmet());
app.use('/api', apiRouter);
app.listen(PORT, () => { console.log(`Server listening on http://localhost:${PORT}`) });
