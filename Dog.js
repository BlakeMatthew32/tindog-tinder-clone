
// Create the Dog class here

class Dog {

    constructor(data) {
        Object.assign(this, data)
    }

    getDogSwipedHtml() {
        const {hasBeenSwiped, hasBeenLiked} = this
        if (hasBeenSwiped && hasBeenLiked) {
            return `
                <img src="images/badge-like.png">
            `
        } else if (hasBeenSwiped) {
            return `
                <img src="images/badge-nope.png">
            ` 
        } else {
            return ''
        }
    }

    getDogHtml() {
        const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this
        const dogSwipedHtml = this.getDogSwipedHtml();
        return `
            <div class="dog-card">
                <img class="dog-img" src=${avatar}>
                <div class="swiped">
                    ${dogSwipedHtml}
                </div>
                <div class="dog-info">
                    <p class="dog-name-age">${name}, ${age}</p>
                    <p class="dog-bio">${bio}</p>
                </div>
            </div>
        `
    }
}

export {Dog}