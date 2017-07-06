const bcrypt = require('bcryptjs');

module.exports = function(reqPass, userPass) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(reqPass, userPass, function(err, valid) {
      if (err) return reject(err);
      if (!valid) return reject({ status: 401 });
      resolve();
    });
  });
};

