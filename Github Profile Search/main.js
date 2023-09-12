import { errorMessage, getUser } from './js/functions.js'
import * as v from './js/variables.js'

v.form.addEventListener("submit", (e) => {
  e.preventDefault()
  let user = v.search.value.split(" ").join("")

  if(user === ""){
    errorMessage("Put a proper userName")
  }else{
    getUser(user)
    v.search.value = ""
  }
})