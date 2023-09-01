// give a rectangular matrix of character, add a border of asterisks(*) to it

// For
// pictures = ["abc", "ded"]

// the output should be
// addBorder(picture) = ["*****", "*abc*", "*ded*", "*****"]


function addBorder(pictures) {
    let asterisks = "*".repeat(pictures[0].length + 2)

    pictures.unshift(asterisks)
    pictures.push(asterisks)

    for(let i = 1; i < pictures.length - 1; i++) {
        pictures[i] = "*".concat(pictures[i]).concat("*")
    }

    return pictures
}

console.log(addBorder(["abc", "ded`"]));
