         // EVENTS
// function zoomIn(){
//     var para=document.getElementById('para');
//     para.style.fontSize = '20px';
// }

// function zoomOut(){
//     var para=document.getElementById('para');
//     para.style.fontSize = '10px';
// }


// 1. Create a signup form and display form data in your web
// page on submission.

// function submitForm(event){
//     event.preventDefault();

// var nameInput = document.getElementById("name");
// var emailInput = document.getElementById("email");
// var passwordInput = document.getElementById("password");


// var formData = {
//     name: nameInput.value,
//     email: emailInput.value,
//     password: passwordInput.value
//   };

// var formDataContainer = document.getElementById('form-data');
// formDataContainer.innerHTML =`
// <h3>Form Data</h3>
// <p><strong>Name:</strong> ${formData.name}</p>
// <p><strong>Email:</strong> ${formData.email}</p>
// <p><strong>Password:</strong> ${formData.password}</p`;

// nameInput.value ="";
// emailInput.value ="";
// password.value ="";
// }

// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.

// function readMore1(){
//     var read = "Client-Side Interactivity: JavaScript enables interactive and dynamic behavior on the client-side of web applications. It allows developers to manipulate the Document Object Model (DOM) of a webpage, making it possible to modify the content, style, and behavior of elements in real-time based on user actions."
//    document.getElementById('para1').innerHTML =read; 
// }

// function readMore2(){
//     var read ="Wide Browser Support: JavaScript is supported by all major web browsers, including Chrome, Firefox, Safari, and Edge. This widespread support ensures that JavaScript code can run on a wide range of devices and platforms, providing excellent cross-browser compatibility."
//     document.getElementById('para2').innerHTML = read;
// }

// function readMore3(){
//     var read = "Enhanced User Experience: JavaScript empowers developers to create rich and engaging user experiences. It enables the development of interactive features like form validation, image sliders, dropdown menus, tooltips, and more, enhancing usability and user satisfaction."
//     document.getElementById('para3').innerHTML=read;
// }

// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.

const table = document.getElementById('studentsTable');

for (const row of table.querySelectorAll('tr')) {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function() {
    row.remove();
  });
  row.appendChild(deleteButton);
}

for (const row of table.querySelectorAll('tr')) {
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.addEventListener('click', function() {
    const form = document.getElementById('editForm');
    form.style.display = 'block';
    for (const cell of row.querySelectorAll('td')) {
      const input = document.createElement('input');
      input.type = 'text';
      input.value = cell.textContent;
      form.appendChild(input);
    }
  });
  row.appendChild(editButton);
}






