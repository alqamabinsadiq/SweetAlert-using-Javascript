
// main JS File.
//Variables
// Normal Alert
var modal = document.getElementById('myModal');

var btn = document.getElementById("myBtn");

var clsButton = document.getElementsByClassName("close")[0];

//Prompt
var promptModal = document.getElementById('myPromptModal');

var prmptbtn = document.getElementById("myPromptBtn");

var promptClsBtn = document.getElementsByClassName("closePrompt")[0];

var prompContent = document.getElementById("promptContent");

var showUserPromptBtn = document.getElementsByClassName("showUserPromptBtn")[0];

var userPromptContent = document.getElementById("userPromptContent");

var closeUserContentPrompt = document.getElementsByClassName("closeUserContentPrompt")[0];

//Methods
// Normal Alert
// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

clsButton.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    else if (event.target == promptModal) {
        promptModal.style.display = "none";
    }
}

// Prompt Alert
function showPrompt() {
    // Prompt Alert
    promptModal.style.display = "block";
    prompContent.style.display = "flex";
    userPromptContent.style.display = "none";
}


promptClsBtn.onclick = function () {
    promptModal.style.display = "none";
}

showUserPromptBtn.onclick = function () {
    var userMessage = document.getElementById("userMessage").value;
    var messageContainer = document.getElementById("promptMessage");
    messageContainer.innerHTML = "You wrote: " + userMessage; 
    prompContent.style.display= "none";
    userPromptContent.style.display = "flex";
}

closeUserContentPrompt.onclick = function() {
    userPromptContent.style.display = "none";
    promptModal.style.display = "none";
}

