const errorHandler = (err, req, res, next) => {
    console.log("Error message:", err.message);
    console.log("Error code:", err.code);
    console.log("Error stack:", err.stack);
    if (err.code === 'P2025') {
        res.status(404).json({ error: "Resource not found" });
        return;
    }
    res.status(err.status || 500).json({ error: err.message || "Internal server error" });
};
export default errorHandler;
