const modalBtn = document.getElementById("modal-button");
const modalArea = document.getElementById("modal-area");
const modal = document.getElementById("modal");

function openModal() {
    modalArea.classList.toggle("hide");
}

function closeModal() {
    modalArea.classList.toggle("hide");
}

function createCloseBtn() {
    const closeBtn = document.createElement("button");
    closeBtn.innerHTML = "Close";
    closeBtn.addEventListener("click", closeModal);
    modal.appendChild(closeBtn);
}

function createModal() {
    modal.innerHTML = `
        <h3>Modal Example</h3>
        <hr>
        <p>모달창 예시입니다.</p>
    `;
    createCloseBtn();
}

function createBtn() {
    modalBtn.value = "Open Modal";
    modalBtn.addEventListener("click", openModal);
}

function init() {
    createBtn();
    createModal();
}

init();