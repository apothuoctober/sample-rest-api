async function controller(req, res) {
  try {
    return res.status(509).json('no implementation');
  } catch (e) {
    return res.status(500).json({ message: `Unhandled error: ${e.message}`, details: e.stackTrace });
  }
}

module.exports = controller;
