// Simple logger utility mimicking Pino or Winston for the mock environment
const logLevels = {
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
};

const currentLevel = process.env.LOG_LEVEL ? logLevels[process.env.LOG_LEVEL.toUpperCase()] : logLevels.INFO;

const formatMessage = (level, message, meta = {}) => {
    const timestamp = new Date().toISOString();
    return JSON.stringify({
        timestamp,
        level,
        message,
        ...meta,
    });
};

module.exports = {
    debug: (msg, meta) => { if (currentLevel <= logLevels.DEBUG) console.debug(formatMessage('DEBUG', msg, meta)); },
    info: (msg, meta) => { if (currentLevel <= logLevels.INFO) console.info(formatMessage('INFO', msg, meta)); },
    warn: (msg, meta) => { if (currentLevel <= logLevels.WARN) console.warn(formatMessage('WARN', msg, meta)); },
    error: (msg, meta) => { if (currentLevel <= logLevels.ERROR) console.error(formatMessage('ERROR', msg, meta)); },
};
