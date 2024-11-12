function openForm() {
    document.getElementById("applicationForm").style.display = "flex";
}

function closeForm() {
    document.getElementById("applicationForm").style.display = "none";
}

function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const statement = document.getElementById("statement").value;

    alert(`Thank you, ${name}! Your application has been submitted.`);
    document.getElementById("applyForm").reset();
    closeForm();
}
