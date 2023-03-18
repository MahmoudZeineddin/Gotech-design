


function validateForm() {
    //  document.forms [form_name] [input_name]
    var firstName = document.forms["form"]["FirstName"].value;
    var lastName = document.forms["form"]["LastName"].value;
    var email = document.forms["form"]["email"].value;
    var selectOption = document.forms["form"]["selectOption"].value;
    var textAreaBox = document.forms["form"]["textareaBox"].value;


    if (firstName == ""||lastName=="" || email==""|| selectOption==""||textAreaBox=="") {
        
            document.getElementById("FirstName").style.border = "2px solid red";
            document.getElementById("LastName").style.border = "2px solid red";
            document.getElementById("email").style.border = "2px solid red";
            document.getElementById("selectOption").style.border = "2px solid red";
            document.getElementById("textareaBox").style.border = "2px solid red";
            
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
        var span = document.getElementsByClassName("close")[0];

        span.onclick = function () {
            modal.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

      

        return false;
    }

}