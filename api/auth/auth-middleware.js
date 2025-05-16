async function protect(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    next({
      status: 401,
      message:
        "You do not have permission to access this resource. Please log in.",
    });
  }
}

module.exports = { protect };
