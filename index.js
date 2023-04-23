import {dogs} from './data.js'
import {Dog} from './Dog.js'

// Remember to import the data and Dog class!

function likeSwipeAction(e) {
    dog.hasBeenLiked = true
    dog.hasBeenSwiped = true 
    render()
    dogSwiped()  
    
}
function dislikeSwipeAction(e) {
    dog.hasBeenSwiped = true
    render()
    dogSwiped()
}

function dogSwiped() {
    console.log(dog.hasBeenLiked)
    dog = getNewDog()
    setTimeout(() => {
        render()
    }, 1500)
}

function getNewDog() {
    const nextDogData = dogs.shift()
    return nextDogData ? new Dog(nextDogData) : {}
}

function render() {
    document.getElementById('dog').innerHTML = dog.getDogHtml()
}

document.getElementById('like-btn').addEventListener('click', likeSwipeAction)
document.getElementById('dislike-btn').addEventListener('click', dislikeSwipeAction)

let dog = getNewDog()

render()