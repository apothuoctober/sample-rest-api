const admin = {
  username: [process.env.ADMIN_USERNAME || 'admin'],
  password: process.env.ADMIN_SECRET || 'secret',
};

module.exports = admin;
