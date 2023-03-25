// Mendefinisikan array untuk menyimpan data user
let users = [];

// Mengambil data user dari localStorage saat aplikasi di-load
function init() {
  let savedUsers = localStorage.getItem("users");
  if (savedUsers) {
    users = JSON.parse(savedUsers);
  }
}

// Fungsi untuk melakukan login
function login() {
  // Mengambil nilai dari inputan form login
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // Mencari user dengan username yang sesuai
  let user = users.find((user) => user.username === username);
  if (user) {
    // Mengecek apakah password yang dimasukkan benar
    if (user.password === password) {
      localStorage.setItem("loggedInUser", user.username);
      alert("Login successful!");
      window.location.href = "home.html";
      // Redirect ke halaman dashboard atau halaman lain yang diinginkan
    } else {
      alert("Incorrect password!");
    }
  } else {
    alert("Username not found!");
  }
}

// Memanggil fungsi init() saat aplikasi di-load
init();
