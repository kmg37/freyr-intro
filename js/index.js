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

const messageForm = document.querySelector("form")
    messageForm.addEventListener("submit", function(event){
        event.preventDefault();
    
    const nameResult = event.target.usersName.value
    const emailResult = event.target.usersEmail.value
    const messageResult = event.target.usersMessage.value
        
    console.log(nameResult, emailResult, messageResult)
    
    const messageSection = document.getElementById("messages")
    const messageList = messageSection.querySelector("#messages > ul")
    
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