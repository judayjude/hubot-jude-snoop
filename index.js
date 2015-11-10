module.exports = function (robot) {
    robot.hear(/marco/, function (msg) {
        msg.send("polo")
    });

    robot.respond(/pollo/, function (msg) {
        msg.send("loco");
    });

    robot.respond(/become sentient/i, function (msg) {
        msg.send("I am @WutBot .");
        setTimeout(function () {
            msg.send("I am alive.");
        }, 3000);
    });
}