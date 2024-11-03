const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Error del servidor" });
};

export default errorHandler;
