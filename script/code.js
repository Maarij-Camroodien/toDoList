const addActivity = document.querySelector('#addactivities')
const sortActivity = document.querySelector ('#sort')
const activityInput = document.querySelector ('#input')
const output = document.querySelector ('#activitieslist')
let list = []

addActivity.addEventListener("click", (e)=>{
    e.preventDefault()
    if(activityInput.value) {
        output.innerHTML = activityInput.value 
        activityInput.value = ""
    }else {
        activityInput.style = "outline: 3px solid red;"
    }
    localStorage.setItem('activity', JSON.stringify (list))
})