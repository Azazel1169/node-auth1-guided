async function protect(req, res, next) {
  console.log("protect working");

  next();
}

module.exports = { protect };
