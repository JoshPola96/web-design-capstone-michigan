$(document).ready(function () {
  $('#maindashboard').hide();
  $('#sidebarmenudashboard').click(function () {
    $('#mainhome').hide();
    section = $(this).attr("href");
    $(section).show(1000);
  })
  $('#sidebarmenuhome').click(function () {
    $('#maindashboard').hide();
    section = $(this).attr("href");
    $(section).show(1000);
  })
})

const inputField = document.getElementById('inputfield');
const userinput = document.getElementById('userinput');
const bertresponsetemplate = document.getElementById('bertresponsetemplate');
const bertresponsetemplateclone = bertresponsetemplate.cloneNode(true);
const bertresponse = document.getElementById('bertresponse');

inputField.addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    const inputText = inputField.value.trim();
    if (inputText !== '') {
      interact();
    }
  }
});

function interact() {

  userinput.innerHTML = '';

  const input = inputField.value;
  if (inputField.value !== '') {
    inputField.value = '';
    let message = document.createElement('div');
    message.innerHTML = `<p>${input}</p>`;
    userinput.appendChild(message);

    const response = generateResponse(input);

    message = document.createElement('div');
    message.innerHTML = `<p>${response}</p>`;
    bertresponsetemplateclone.querySelector('p').firstChild.data = message.innerText;
    bertresponse.appendChild(bertresponsetemplateclone);
    message.scrollIntoView({ behavior: "smooth" });

  }
  else {
    let message = document.createElement('div');
    message.innerHTML = `<p>Please enter a value</p>`;
    bertresponsetemplateclone.querySelector('p').firstChild.data = message.innerText;
    bertresponse.appendChild(bertresponsetemplateclone);
    message.scrollIntoView({ behavior: "smooth" });
  }

  function generateResponse(input) {
    const responses = [
      "You should be burned on a stake in the public!",
      "Sounds alright, Off you go!"
    ];

    return responses[Math.floor(Math.random() * responses.length)];
  }
}
