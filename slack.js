const slackBot = require("slackbots")
const channel = "general"

const bot = new slackBot({
    token: "",
    name: "sappo"
})


bot.on("start", function(){
    bot.postMessageToChannel(channel,"Hello Slack")
    //console.log("hello")
})


bot.on("message", function(data) {
    if (data.type !== "message") {
        return;
    }
    handleMessage(data.text);
    console.log(data.user)
});

// bot.on("message", function(data){
//     if(data.type === "error"){
//         return;
//     }
//     handleMessage(data.type);
//     console.log(data.type)
// })


function handleMessage(message) {
    switch(message) {
        case "hi":
            sendGreeting();
            break;
        case "hello":
            sendGreeting();
            break;
        default:
            return;
    }
}

function sendGreeting() {
    var greeting = getGreeting();
    bot.postMessageToChannel(channel, greeting);
}

function getGreeting() {
    var greetings = [
        "hello!",
        "hi there!",
        "cheerio!",
        "how do you do!",
        "¡hola!"
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
}
