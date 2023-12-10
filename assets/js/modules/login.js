import { loadAuth } from "../api/auth.js";

const handleFormSubmit = async (event) => {
  try {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { email, password } = Object.fromEntries(formData);

    const accessToken = await loadAuth(email, password);

    // Access token akan disimpan jika response API berhasil
    localStorage.setItem("accessToken", accessToken);
    window.location.href = "../page/index.html";
  } catch (e) {
    // Error message dari server akan dimunculkan jika response gagal
    // Lihat js\api\auth.js
    alert(e.message);
  }
};

const setRegisterFormSubmit = () => {
  const form = document.getElementById("myForm");
  form.addEventListener("submit", handleFormSubmit);
};

setRegisterFormSubmit();
