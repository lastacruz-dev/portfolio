const openBtn = document.querySelector("#btnOpen");
const closeBtn = document.querySelector("#btnClose");
const navUl = document.querySelector(".nav ul");

openBtn.addEventListener("click", () => navUl.classList.add("reveal"));
closeBtn.addEventListener("click", () => navUl.classList.remove("reveal"));

(function () {
  emailjs.init("YC2C9c_-Ff4j-AQLx");
})();

function sendMail(e) {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_8txlg6i", "template_email", params).then(
    function (response) {
      alert("SUCCESS!", response.status, response.text);
    },
    function (error) {
      alert("FAILED...", error);
    }
  );
}
