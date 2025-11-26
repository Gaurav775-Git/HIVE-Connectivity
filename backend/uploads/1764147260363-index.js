const mongo = require('mongoose');

const connect = async()=>{
    try{
        await mongo.connect("mongodb+srv://user775:user775@tom.i44wtw7.mongodb.net/testdb");

        console.log('Database connected .')
    }catch(err){
        console.log(err);
    }
}

module.exports = connect;