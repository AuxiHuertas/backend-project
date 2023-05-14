const { sql } = require("slonik");

const isertUsers = (username, password) => sql.unsafe`
    INSERT INTO users (username, password) 
    VALUES ( ${username}, ${password})
   
`;

const selectByusername = (username)=> sql.unsafe`
SELECT username,password
FROM users
WHERE username LIKE ${username};

`

module.exports = {
  isertUsers,
  selectByusername
};
