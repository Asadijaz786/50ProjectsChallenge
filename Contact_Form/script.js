const progress = document.getElementById("progress");

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnSend = document.querySelector(".sendBtn");
// console.log(btnsOpenModal);

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

btnSend.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// esc key press
document.addEventListener("keydown", function (e) {
  // console.log('a key pressed');
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
