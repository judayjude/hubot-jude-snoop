module.exports = function (robot) {
    robot.hear(/marco/, function (msg) {
        msg.send("polo");
    });

    robot.respond(/pollo/, function (msg) {
        msg.send("loco");
    });
};