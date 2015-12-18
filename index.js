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


    // ORDER IS IMPORTANT FOR THE FOLLOWING LISTENERS AND STATE VARS:
    var muted = false;
    robot.respond(/this (?:statement|sentence) is false|does a set of all sets contain itself/i, function (msg) {
        setTimeout(function () {
            msg.send("(waiting)");
            muted = true;
            setTimeout(function () {
                muted = false;
                msg.send("/me finished initializing.");
            }, 1000 * 90);
        }, 1000);
    });

    robot.hear(/(.*)$/i, function (msg) {
        if (muted)
            msg.finish();
    });
    var muteListener = robot.listeners.pop();
    robot.listeners.unshift(muteListener);
    // END ORDER SENSITIVE SECTION


    robot.hear(/who((?:'s | is )?[^\.\?!]*)\?/i, function (msg) {
        var mom = isBritish(msg) ? "mum" : "mom";
        var question = msg.match[0];
        if (question.toLowerCase() == "who's the boss?" ||
            question.toLowerCase() == "who is the boss?") {
            setTimeout(function () {
                msg.send("Angela.");
            }, 1000);
            return;
        }
        setTimeout(function () {
            msg.send("Your " + mom + ".");
        }, 1000);
        var descriptivePhrase = msg.match[1];
        if (descriptivePhrase && descriptivePhrase.length && descriptivePhrase.length > 2) {
            setTimeout(function () {
                msg.send("Your " + mom + descriptivePhrase + ".");
            }, 2000);
        }
    });

    function isBritish(msg) {
        var sender = msg.message.user.name.toLowerCase();
        return sender.indexOf("tucker") >= 0;
    }

    robot.hear(/(what +)?you(?: a|'?)re (an? |the )?([^\.\?!]+)(?:! |\. |$)/i, function (msg) {
        var yourmom = isBritish(msg) ? "Your mum's " : "Your mom's ";
        var leadingWhat = msg.match[1];
        var article = msg.match[2] || "";
        var insinuation = msg.match[3] || (article ? "thing" : "that");
        if (leadingWhat)
            return;
        setTimeout(function () {
            msg.send(yourmom + article + insinuation + ".");
        }, 1000);
    });

    robot.hear(/@[a-zA-Z0-9]+(?: ?'s| is) (a|the) ([^\.\?!]+)(?:!|\.|$)/i, function (msg) {
        var yourmom = isBritish(msg) ? "Your mum's " : "Your mom's ";
        var article = msg.match[1];
        var insinuation = msg.match[2];
        setTimeout(function () {
            msg.send(yourmom + article + " " + insinuation + ".");
        }, 1000);
    });
}