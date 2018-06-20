const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const logger = require('./logger');
const appRoutes = require('./routes/appRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
appRoutes(app);

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.disable('x-powered-by');

console.log(`Server running on port ${PORT}`);

const server = app.listen(PORT);
logger.log.info(`Running on port ${server.address().port}`);
