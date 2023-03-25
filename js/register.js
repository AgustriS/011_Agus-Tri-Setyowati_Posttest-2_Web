let users = [];

// Mengambil data user dari localStorage saat aplikasi di-load
function init() {
  let savedUsers = localStorage.getItem("users");
  if (savedUsers) {
    users = JSON.parse(savedUsers);
  }
}

// Fungsi untuk menambahkan user baru
function register() {
  let newUsername = document.getElementById("new-username").value;
  let newPassword = document.getElementById("new-password").value;
  let isExist = users.some((user) => user.username === newUsername);
  if (isExist) {
    alert("Username already exists!");
  } else {
    users.push({ username: newUsername, password: newPassword });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful!");
    window.location.href = "index.html";
  }
}

init();
