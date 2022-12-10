const scriptURL = "https://script.google.com/macros/s/AKfycbyyG8l_ONut_MfhK_4XaZQ_QzoABUMGpWJc1fhB2EhQwOH2voQFBIYyRujhP62H5OBzVA/exec";
const form = document.forms["submit-to-google-sheet"];
const btnKirim = document.querySelectorAll(".btn-kirim");
const btnLoading = document.querySelectorAll(".btn-loading");
const alertForm = document.querySelectorAll(".alert-form-contact");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
            console.log("Success!", response);
            alertForm.classList.toggle("d-none");
            form.reset();
        })
        .catch((error) => console.error("Error!", error.message));
});
