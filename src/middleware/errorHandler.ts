import { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.log("Error message:", err.message)
    console.log("Error code:", err.code)
    console.log("Error stack:", err.stack)

    res.status(err.status || 500).json({error: err.message || "Internal server error"})
}

export default errorHandler