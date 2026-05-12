const { Client } = require('pg');
const client = new Client({
  connectionString: 'postgresql://postgres:postgres@172.30.4.202:5432/chioi?schema=public'
});
client.connect()
  .then(() => client.query("SELECT phone, password_hash FROM users WHERE phone='0901111111'"))
  .then(res => {
    console.log("Admin DB Entry:", res.rows);
    return client.end();
  })
  .catch(console.error);
