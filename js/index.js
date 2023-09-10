const today = new Date()
const thisYear = today.getFullYear()
const footer = document.querySelector("footer")

const copyright = document.createElement('p')
    copyright.innerHTML = `Kendrick Goedecke ${thisYear} &copy;`

footer.appendChild(copyright)

const skills = [
    "JavaScript",
    "HTML",
    "CSS",
    "Photoshop",
    "Premiere",
    "VEGAS",
]

const skillsSection = document.querySelector("#skills")
const skillsList = document.querySelector("#skillsList")

for (i = 0; i < skills.length; i++) {
    const skill = document.createElement('li')
    skill.innerText = skills[i]
    skillsList.appendChild(skill)
}

const messageForm = document.querySelector("form")
    messageForm.addEventListener("submit", function(event){
        event.preventDefault();
    
    const nameResult = event.target.usersName.value
    const emailResult = event.target.usersEmail.value
    const messageResult = event.target.usersMessage.value
        
    console.log(nameResult, emailResult, messageResult)
    
    const messageSection = document.getElementById("messages")
    const messageList = messageSection.querySelector("#messages > ul")

    if (messageSection.style.display === "none") {
        messageSection.style.display = "block"
    }
    
    const newMessage = document.createElement('li')
        newMessage.innerHTML = `<a href="mailto:${emailResult}">${nameResult}</a> wrote: <span>"${messageResult}" </span>`
        
    removeButton = document.createElement('button')
        removeButton.innerText = 'remove' 
        removeButton.setAttribute('type', 'button')

        newMessage.appendChild(removeButton)
        messageList.append(newMessage)
        
            removeButton.addEventListener("click", function(event){
                const entry = removeButton.parentNode
                    newMessage.remove(entry)
            })
messageForm.reset()
});

fetch ("https://api.github.com/users/kmg37/repos")
    .then ((res) => res.json())
    .then ((data) => {

const projectSection = document.getElementById('projects');
const projectList = projectSection.querySelector('#projects > ul');

for (const repositories of data) {
    const project = document.createElement('li');
        project.innerHTML = `<a href="${repositories.html_url}" target="_blank">${repositories.name}</a>`;
            projectList.appendChild(project);
        }
    })