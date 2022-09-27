const controllerWithErrorHandling = async (baseController) => async (req, res, next) => {
  try {
    return await baseController(req, res, next);
  } catch (e) {
    return res.status(500).json({ message: `Unhandled error: ${e.message}`, details: e.stackTrace });
  }
};

module.exports = controllerWithErrorHandling;
