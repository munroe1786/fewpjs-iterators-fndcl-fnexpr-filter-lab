function findMatching(array, answer) {
    return array.filter( name =>
        name.toLowerCase() === answer.toLowerCase()
    )
}

function fuzzyMatch(array, answer) {
    return array.filter( name =>
        name.toLowerCase().indexOf(answer.toLowerCase()) === 0
    )
}

function matchName(array, answer) {
    return array.filter( item => item.name === answer)
}