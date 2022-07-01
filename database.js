
import mysql from 'mysql2';
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: "dbname",
});
let connect = () => {
    connection.connect ( (err) => {
        if(!err){
            console.log('database is connected ...')
        }else{
            console.log('database connected err')
        }
    })
};
let closeDB = () => {
    connection.end((err) => {
        if(!err) console.log('close db')
    })
}
 
exports.getAllUser = (callbackQuery) => {
    connect();
    connection.query('select * from users', (err, results, fields) => {
        if(!err){
            callbackQuery(results);
        }else{
            console.log(err)
        }
    })
}
