const {Kafka} = require('kafkajs') 
require('dotenv').config();
exports.kafka=new Kafka({
    clientId:'my-app',
    brokers:["process.env.IP:9092"],
});