module.exports = (robot) ->
    robot.hear /marco/, (msg) ->
        msg.send "polo"

    robot.respond /pollo/, (msg) ->
        msg.send "loco"