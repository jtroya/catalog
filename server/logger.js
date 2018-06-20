const winston = require('winston');
const moment = require('moment');

const consoleLogger = new winston.transports.Console({
  timestamp: () => {
    const today = moment();
    return today.format("DD-MM-YYYY h:mm:ssa");
  },
  colorize: true,
  level: "debug"
});

const logger = new winston.Logger({
  transports: [consoleLogger]
});

if (process.env.NODE_ENV === "production") {
  logger.transports.console.level = "info";
}

if (process.env.NODE_ENV === "development") {
  logger.transports.console.level = "debug";
}

logger.exitOnError = false;
module.exports.log = logger;