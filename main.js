

// smallest person function

const user = [{name:"temo", age:25},{name:"lasha", age:21}, {name: "ana", age:28}]

function userMinAge(user){
    let min = user[0].age
    let name = "";
    for(const item of user){
        if(item.age < min){
            min = item.age
        }
    }
    for(const item of user){
        if(min === item.age){
            name = item.name
        }
    }
    return `the smallest person is ${name}`
}

console.log(userMinAge(user))


//dice game

const player1 = parseInt(Math.random() * 10) + 1
const player2 = parseInt(Math.random() * 10) + 1

console.log(`player1 score:  ${player1}`)
console.log(`player2 score:  ${player2}`)

if(player1 === 3 && player2 === 3){
    console.log("game tied")
}else if(player1 === 3 && player2 !== 3){
    console.log("the winner is player1")
}else if(player1 !== 3 && player2 === 3){
    console.log("the winner is player2")
}else{
    console.log("try again")
}



// copyobject function

const user1 = {
    name: "nodari",
    surname: "kobalia",
    age: 24
}

let clone = function (obj){
    obj.age = 23
    obj.name = "giorgi"
    obj.surname = "macharashvili"

    return Object.assign({}, obj)
}

console.log(user1)
console.log(clone(user1))