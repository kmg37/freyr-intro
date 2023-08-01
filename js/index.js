const today = new Date()
const thisYear = today.getFullYear()
const footer = document.querySelector("footer")


const copyright = document.createElement('p')
    copyright.innerText = "Kendrick Goedecke " + thisYear

footer.appendChild(copyright)

const skills = [
    "JavaScript",
    "HTML",
    "Video Production",
]

const skillsSection = document.querySelector("#skills")
const skillsList = document.querySelector("#skills > ul")

for (i = 0; i < 3; i++) {
    const skill = document.createElement('li')
    skill.innerText = skills[i]
    skillsList.appendChild(skill)
}