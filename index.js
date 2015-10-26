module.exports = function (robot) {
    robot.respond(/marco/, function (msg) {
        msg.send("polo");
    });
};