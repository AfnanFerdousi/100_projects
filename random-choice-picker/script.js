const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if (e.key === "Enter") {
        setTimeout(() => {
            e.target.value = ""
        }, 10)
        randomSelect()
    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== "").map(tag => tag.trim())

    tagsEl.innerHTML = ""

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag;

        tagsEl.appendChild(tagEl)
    })
}

function randomSelect() {
    const times = 30;

    // blinking start
    const interval = setInterval(() => {
        const randomTag = pickRandom()
        console.log(randomTag)
        if (randomTag !== undefined) {
            highLightTag(randomTag)
        }
        setTimeout(() => {
            unHighLightTag(randomTag)
        }, 100)
    }, 100)
    // blinking end

    // choosing a random tag after 3000ms
    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandom()
            highLightTag(randomTag)
        }, 100)


    }, times * 100)
}

function pickRandom() {
    const tags = document.querySelectorAll(".tag")
    return tags[Math.floor(Math.random() * tags.length)]

}

function highLightTag(tag) {
    tag.classList.add('highlight')
}
function unHighLightTag(tag) {
    tag.classList.remove('highlight')
}