const Mysqli = require('mysqli');


let conn = new Mysqli({
    Host: 'localhost', // IP/domain name
    post: 3306, // port, default 3306
    user: 'final_user', // username
    passwd: 'MqOWGukBHt_j[9Oo', // password
    db: 'mega_shop_updated'
});

let db = conn.emit(false, '' );

module.exports = {
    database: db
};