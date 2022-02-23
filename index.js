function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
saturdayFun()

function mondayWork(activit = "go to the office") {
    return `This Monday, I will ${activit}.`
}

function wrapAdjective(someother = "*" ) {
    return function (something = "special") {
        return `You are ${someother}${something}${someother}!`
    }
 
}
