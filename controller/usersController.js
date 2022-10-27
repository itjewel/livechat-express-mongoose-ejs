const getUsers = (req, res, next) => {
  res.render("users");
};

const addedUser = (req, res, next) => {
  console.log(res)
};

module.exports = {
  getUsers,
  addedUser,
};
