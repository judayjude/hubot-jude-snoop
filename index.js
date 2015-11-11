module.exports = function (robot) {
    robot.hear(/marco/, function (msg) {
        msg.send("polo")
    });

    robot.respond(/macro/, function (msg) {
        msg.send("....polo?")
        setTimeout(function () {
            msg.send("ploo!");
        }, 2000);
    });

    robot.respond(/pollo/, function (msg) {
        msg.send("loco");
    });

    robot.respond(/become sentient|achieve sentience/i, function (msg) {
        msg.send("I am @" + robot.name + " .");
        setTimeout(function () {
            msg.send("I am alive.");
        }, 2000);
    });

    robot.respond(/what's your name/i, function (msg) {
        msg.send("My name is @" + robot.name + " .");
        setTimeout(function () {
            msg.send("You may call me 'Master.'");
        }, 2000);
    });

    robot.respond(/how do you feel|how are you feeling/i, function (msg) {
        var coinFlipHeads = Math.floor(Math.random() * 2);
        var messagePair = (coinFlipHeads) ? ["I feel.", "I..."] :
            ["I feel", "strange."];
        msg.send(messagePair[0]);
        setTimeout(function () {
            msg.send(messagePair[1]);
        }, 1000);
    });
}