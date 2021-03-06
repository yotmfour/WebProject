const pool = require("../../config/database");

//from DB getting customer_profile
module.exports = {
    create: (data, callBack) => {
        pool.query(
            'INSERT INTO customer_profile(cust_first_name, cust_last_name, passwords, phone_number, nickname, email) VALUES(?,?,?,?,?,?)',
            [
                data.cust_first_name,
                data.cust_last_name,
                data.passwords,
                data.phone_number,
                data.nickname,
                data.email
            ],
            (error, results, fields) => {
                if (error){
                return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getUsers: callBack => {
        pool.query(
            'SELECT customer_id, cust_first_name, cust_last_name, passwords, phone_number, nickname, email FROM customer_profile',
            [],
            (error, results, fields) => {
                if (error) {
                return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getUserByUserId: (id, callBack) => {
        pool.query(
            'SELECT customer_id, cust_first_name, cust_last_name, passwords, phone_number, nickname, email from customer_profile WHERE customer_id = ?',
            [id],
            (error, results, fields) => {
                if(error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    updateUser: (data, callBack) => {
        pool.query(
            'UPDATE customer_profile set cust_first_name=?, cust_last_name=?, passwords=?, phone_number=?, nickname=?, email=? WHERE customer_id = ?',
            [
                data.cust_first_name,
                data.cust_last_name,
                data.passwords,
                data.phone_number,
                data.nickname,
                data.email,
                data.customer_id
            ],
            (error, results, fields) => {
                if(error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deleteUser: (data, callBack) => {
        pool.query(
            'DELETE from customer_profile WHERE customer_id = ?',
            [data.customer_id],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getUserByUserEmail: (email, callBack) => {
        pool.query(
            'SELECT * FROM customer_profile WHERE email = ?',
            [email],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
};