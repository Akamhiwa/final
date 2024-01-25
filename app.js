const inputName=document.getElementById("fullname")
const inputStage=document.getElementById("inputStage")
const inputGender=document.getElementById("inputGender")
const inputSubjects=document.getElementById("inputSubjects")
const button=document.getElementById("button")
const userName=document.getElementById("user-name")
const userStage=document.getElementById("user-stage")
const userGender=document.getElementById("user-gender")
const userSubjects=document.getElementById("user-subjects")

button.addEventListener("click", functionality)

function functionality(e){
   e.preventDefault()
userName.innerHTML=inputName.value
userStage.innerHTML=inputStage.value
userGender.innerHTML=inputGender.value
userSubjects.innerHTML=inputSubjects.value
}