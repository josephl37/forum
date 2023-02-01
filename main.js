// your code here
let button = document.getElementById('submit');

button.addEventListener('click', function () {

  // get message
  let message = document.getElementById('message').value;

   // turns message into text node
   let userMessage = document.createTextNode(message)

   // create an individual post
   let post = document.createElement('p');

   // get posts section
   let posts = document.getElementsByClassName("posts")[0];

   // appends message into "posts" div
   post.appendChild(userMessage);
   posts.append(post);


  // get name
  let name = document.getElementById('name').value;

})