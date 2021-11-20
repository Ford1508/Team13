function clickSubmit(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    if(name == "" || email == "" || validateEmail(email) == false || subject == "")
    {
        alert("Please fill out the form completely!")
    }
    else
    {
        alert("Thank you! We've received your message!")
    }
}

function validateEmail(email) {
    const re = 
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}