const form = document.getElementById("myForm");
const output = document.getElementById("output");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  // menyimpan data inputan di session storage
  sessionStorage.setItem("name", form.elements["name"].value);
  sessionStorage.setItem("email", form.elements["email"].value);
  sessionStorage.setItem("age", form.elements["age"].value);
  sessionStorage.setItem("member", form.elements["member"].value);
  sessionStorage.setItem("payment", form.elements["payment"].value);
  const hobbies = [];
  form.querySelectorAll('input[name="hobbies"]:checked').forEach(function(checkbox) {
    hobbies.push(checkbox.value);
  });
  sessionStorage.setItem("hobbies", hobbies.join(", "));
  sessionStorage.setItem("comment", form.elements["comment"].value);
  sessionStorage.setItem("IDCard", form.elements["IDCard"].value);
 
  // menampilkan data yang disimpan di session storage
  const tableBody = document.getElementById("table-body");
  const row = tableBody.insertRow();
  const nameCell = row.insertCell();
  const emailCell = row.insertCell();
  const ageCell = row.insertCell();
  const memberCell = row.insertCell();
  const paymentCell = row.insertCell();
  const hobbiesCell = row.insertCell();
  const commentCell = row.insertCell();
  const IDCardCell = row.insertCell();
  nameCell.innerHTML = sessionStorage.getItem("name");
  emailCell.innerHTML = sessionStorage.getItem("email");
  ageCell.innerHTML = sessionStorage.getItem("age");
  memberCell.innerHTML = sessionStorage.getItem("member");
  paymentCell.innerHTML = sessionStorage.getItem("payment");
  hobbiesCell.innerHTML = sessionStorage.getItem("hobbies");
  commentCell.innerHTML = sessionStorage.getItem("comment");
  IDCardCell.innerHTML = `<img src="${sessionStorage.getItem("IDCard")}" alt="IDCard">`;
});

const data = JSON.parse(sessionStorage.getItem("formData"));
if (data) {
  const tableBody = document.getElementById("table-body");
  data.forEach(function(item) {
    const row = tableBody.insertRow();
    const nameCell = row.insertCell();
    const emailCell = row.insertCell();
    const ageCell = row.insertCell();
    const memberCell = row.insertCell();
    const paymentCell = row.insertCell();
    const hobbiesCell = row.insertCell();
    const commentCell = row.insertCell();
    const IDCardCell = row.insertCell();
    nameCell.innerHTML = item.name;
    emailCell.innerHTML = item.email;
    ageCell.innerHTML = item.age;
    memberCell.innerHTML = item.member;
    paymentCell.innerHTML = item.payment;
    hobbiesCell.innerHTML = item.hobbies.join(", ");
    commentCell.innerHTML = item.comment;
    IDCardCell.innerHTML = `<img src="${URL.createObjectURL(item.IDCard)}" alt="Avatar">`;   
  });
}
