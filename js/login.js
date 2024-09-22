const loginForm = document.getElementById("cpLoginForm");
const signupForm = document.getElementById("cpSignupForm");
const errorEl = document.querySelectorAll(".cp__input-icon");
const errorMsgBoxes = document.querySelectorAll(".cp__input-error-messages");
const CLASS_VISIBLE = "visible";

errorEl.length > 0 && errorEl?.forEach(el => {
    el.addEventListener("click", (e) => {
        e.stopPropagation();

        const currentEl = e.currentTarget;
        const parentEl = currentEl.closest("[data-error]");

        if( parentEl === null) return;

        const errorMsgBox = parentEl.querySelector(".cp__input-error-messages");

        if(errorMsgBox === null) return;

        if (errorMsgBox.classList.contains(CLASS_VISIBLE)) {
            errorMsgBox.classList.remove(CLASS_VISIBLE);
        } else {
            const allErrorMsgBoxes = document.querySelectorAll(".cp__input-error-messages.visible");
            allErrorMsgBoxes.forEach(box => box.classList.remove(CLASS_VISIBLE));

            errorMsgBox.classList.add(CLASS_VISIBLE);
        }
    });
});

document.addEventListener("click", (e) => {
    const allErrorMsgBoxes = document.querySelectorAll(".cp__input-error-messages.visible");
    allErrorMsgBoxes.forEach(box => {
        if (!box.contains(e.target)) {
            box.classList.remove("visible");
        }
    });
});


loginForm && loginForm.addEventListener("submit", submitForm);
signupForm && signupForm.addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    console.log(Object.fromEntries(formData.entries()));
}