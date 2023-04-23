import {dogs} from './data.js'
import {Dog} from './Dog.js'

// Remember to import the data and Dog class!

function getNewDog() {
    const nextDogData = dogs.shift()
    return nextDogData ? new Dog(nextDogData) : {}
}


function render() {
    document.getElementById('dog').innerHTML = dog.getDogHtml()
}

const dog = getNewDog()

render()