const reviews = [
    {
        id: 1,
        name: 'Jon Bascos',
        job: 'Web Developer',
        img: './images/headshot.jpg',
        text: 'I am a hard-working, team oriented person who loves coding up cool stuff.'
    },
    {
        id: 2,
        name: 'Jackson Kepner',
        job: 'UX Designer',
        img: 'https://randomuser.me/api/portraits/men/54.jpg',
        text: 'I am a very reliable and awesome UX Designer'
    },
    {
        id: 3,
        name: 'Avery Johnson',
        job: 'Computer Technician',
        img: 'https://randomuser.me/api/portraits/men/74.jpg',
        text: 'I like building computers and mining for bitcoin.'
    }   
]

const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')

const prevBtn = document.querySelector('.prev-button')
const nextBtn = document.querySelector('.next-button')
const randomBtn = document.querySelector('.random-btn')

// set starting item

let currentItem = 0

// load initial item
window.addEventListener('DOMContentLoaded', () => {
    showPerson(currentItem)
})

// show person based on item

const showPerson = person => {
    const item = reviews[person]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
}

// Show next person

nextBtn.addEventListener('click', () => {
    currentItem++
    if(currentItem > reviews.length -1) {
        currentItem = 0
    }
    showPerson(currentItem)
})

prevBtn.addEventListener('click', () => {
    currentItem--
    if(currentItem < 0) {
        currentItem = reviews.length - 1
    }

    showPerson(currentItem)
})

// Show random person

randomBtn.addEventListener('click', () => {
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson(currentItem)
})
