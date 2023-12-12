$(document).ready(function () {
  const mainDashboard = $('#maindashboard');
  const sidebarMenuDashboard = $('#sidebarmenudashboard');
  const mainHome = $('#mainhome');
  const sidebarMenuHome = $('#sidebarmenuhome');

  mainDashboard.hide();

  sidebarMenuDashboard.click(function () {
    mainHome.hide();
    const section = $(this).attr('href');
    $(section).show(1000);
    sidebarMenuDashboard.addClass('active');
    sidebarMenuHome.removeClass('active');
  });

  sidebarMenuHome.click(function () {
    mainDashboard.hide();
    const section = $(this).attr('href');
    $(section).show(1000);
    sidebarMenuHome.addClass('active');
    sidebarMenuDashboard.removeClass('active');
  });
});

const inputField = document.getElementById('inputfield');
const userinput = document.getElementById('userinput');
const bertResponseTemplate = document.getElementById('bertresponsetemplate');
const bertResponseTemplateClone = bertResponseTemplate.cloneNode(true);
const bertResponse = document.getElementById('bertresponse');

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
  if (input !== '') {
    inputField.value = '';
    appendMessage(userinput, input);

    const response = generateResponse(input);
    appendMessage(bertResponse, response, true);
  } else {
    const message = 'Please enter a value';
    appendMessage(bertResponse, message, true);
  }

  function generateResponse(input) {
    const responses = [
      'You should be burned on a stake in the public!',
      'Sounds alright, Off you go!'
    ];

    return responses[Math.floor(Math.random() * responses.length)];
  }

  function appendMessage(container, content, cloneTemplate = false) {
    const message = document.createElement('div');
    message.innerHTML = `<p>${content}</p>`;

    if (cloneTemplate) {
      bertResponseTemplateClone.querySelector('p').firstChild.data = message.innerText;
      container.appendChild(bertResponseTemplateClone);
    } else {
      container.appendChild(message);
    }

    message.scrollIntoView({ behavior: 'smooth' });
  }
}