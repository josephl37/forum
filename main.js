// your code here
let button = document.getElementById('submit');

button.addEventListener('click', function () {

   // create a message post and name post
   let postMessage = document.createElement('p');
   let postName = document.createElement('p');

   // create a divider
   let divider = document.createElement('hr');

   // get posts section
   let posts = document.getElementsByClassName("posts")[0];

   // get message and name
   let message = document.getElementById('message').value;
   let name = document.getElementById('name').value;

   // turns message and name into text node
   let userMessage = document.createTextNode(message)
   let userInputName = document.createTextNode(`Posted by: ${name}`);

   // appends message and name into "p" element
   postMessage.appendChild(userMessage);
   postName.appendChild(userInputName);

  // apends message, name, and divider
  posts.append(postMessage);
  posts.append(postName);
  posts.append(divider);
})