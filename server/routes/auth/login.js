const jwt = require('jsonwebtoken');

const config = require(`${__base}/config`);
const User = require(`${__base}/models/User`).User;
const decryptPass = require(`${__base}/libs/decryptPass`);

exports.post = (req, res, next) => {
  console.log(123123);
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) return next({ status: 400 });

  const getUser = () => User.findOne({ username }).select('password');

  getUser()
    .then(user => {
      console.log(user);
      if (!user) next({ status: 401 });
      return decryptPass(password, user.password);
    })
    .then(() => {
      let token = jwt.sign({ username }, config.get('secretkey'));
      return token;
    })
    .then(token => res.json({ token }))
    .catch(err => next(err));

    return false;
};
