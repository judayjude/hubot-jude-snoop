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

    robot.hear(/who((?:'s | is )?[^\.\?!]*)\?/i, function (msg) {
        var question = msg.match[0];
        if (question.toLowerCase() == "who's the boss?" ||
            question.toLowerCase() == "who is the boss?") {
            setTimeout(function () {
                msg.send("Angela.");
            }, 1000);
            return;
        }
        setTimeout(function () {
            msg.send("Your mom.");
        }, 1000);
        var descriptivePhrase = msg.match[1];
        if (descriptivePhrase && descriptivePhrase.length && descriptivePhrase.length > 2) {
            setTimeout(function () {
                msg.send("Your mom" + descriptivePhrase + ".");
            }, 2000);
        }
    });

    robot.hear(/you(?: a|'?)re (a|the) ([^\.\?!]+)(?:!|\.|$)/i, function (msg) {
        var article = msg.match[1];
        var insinuation = msg.match[2];
        setTimeout(function () {
            msg.send("Your mom's " + article + " " + insinuation + ".");
        }, 1000);
    });

    robot.hear(/@[a-zA-Z0-9]+(?: ?'s| is) (a|the) ([^\.\?!]+)(?:!|\.|$)/i, function (msg) {
        var article = msg.match[1];
        var insinuation = msg.match[2];
        setTimeout(function () {
            msg.send("Your mom's " + article + " " + insinuation + ".");
        }, 1000);
    });
}