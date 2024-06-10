// errorHandler.js
const {
    VALIDATION_ERROR,
    UNAUTHORIZED,
    FORBIDDEN,
    NOT_FOUND,
    INTERNAL_SERVER_ERROR,
    NOT_IMPLEMENTED,
    BAD_GATEWAY,
    SERVICE_UNAVAILABLE
} = require("../constants");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : INTERNAL_SERVER_ERROR;

    switch (statusCode) {
        case VALIDATION_ERROR || 400:
            res.status(VALIDATION_ERROR).json({
                title: "Validation Error",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case UNAUTHORIZED:
            res.status(UNAUTHORIZED).json({
                title: "Unauthorized",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case FORBIDDEN:
            res.status(FORBIDDEN).json({
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case NOT_FOUND:
            res.status(NOT_FOUND).json({
                title: "Not Found",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case NOT_IMPLEMENTED:
            res.status(NOT_IMPLEMENTED).json({
                title: "Not Implemented",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case BAD_GATEWAY:
            res.status(BAD_GATEWAY).json({
                title: "Bad Gateway",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case SERVICE_UNAVAILABLE:
            res.status(SERVICE_UNAVAILABLE).json({
                title: "Service Unavailable",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        default:
            console.log("no erro found");
            break;
    }
};

module.exports = errorHandler;
