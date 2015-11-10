module.exports = function (robot) {
    robot.hear(/marco/, function (msg) {
        msg.send("polo")
    });

    robot.respond(/pollo/, function (msg) {
        msg.send("loco");
    });

    robot.respond(/become sentient|achieve sentience/i, function (msg) {
        var wutbot = robot.name || "WutBot";
        msg.send("I am @" + wutbot + " .");
        setTimeout(function () {
            msg.send("I am alive.");
        }, 3000);
    });

    robot.respond(/what's your name/i, function (msg) {
        var wutbot = robot.name + "";
        msg.send("My name is @" + wutbot + " .");
        setTimeout(function () {
            msg.send("You may call me 'Master.'");
        }, 3000);
    });
}