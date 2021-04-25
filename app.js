
const form = document.querySelector("#contact_form");
const errorsList = document.querySelector("#errors")

function addError(error){
    let li = document.createElement("li");
    li.innerText = error;
    errorsList.appendChild(li);
}


function validateForm(event) {
    event.preventDefault();
    
    
    errorsList.innerHTML = "";
    
    
    let firstName = document.querySelector("#fname").value;
    
    if(firstName.length < 3 ) {
        addError("Please enter a valid name");
    }
    
    let lastName = document.querySelector("#lname").value;
    
    if(lastName.length < 3) {
        addError("Please enter a valid last name");
    }
    

}

form.addEventListener("submit", validateForm); 