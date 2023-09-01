const {kafka}=require("./client");


const init=async()=>{
    const admin=kafka.admin();
    console.log('Admin Connecting...');
    await admin.connect();
    console.log("Admin Connection Successfull");

    await admin.createTopics({
        topics:[{
            topic:'rider-updates',
            numPartitions:2,

        }]
    })
    console.log("topic created");
    console.log("Disconnecting admin");
    await admin.disconnect();
}

init();