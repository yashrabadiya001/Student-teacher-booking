// script.js
document.getElementById("bookingForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const studentName = document.getElementById("studentName").value;
    const teacherName = document.getElementById("teacherName").value;
    const appointmentDate = document.getElementById("appointmentDate").value;
    const appointmentTime = document.getElementById("appointmentTime").value;

    if (studentName && teacherName && appointmentDate && appointmentTime) {
        // Display confirmation message
        const confirmationMessage = `Appointment successfully booked for ${studentName} with ${teacherName} on ${appointmentDate} at ${appointmentTime}.`;
        document.getElementById("confirmationMessage").innerText = confirmationMessage;

        // Hide the form and show the confirmation
        document.getElementById("bookingForm").reset(); // Reset the form fields
        document.getElementById("bookingForm").classList.add("hidden");
        document.getElementById("confirmation").classList.remove("hidden");
    } else {
        alert("Please fill all fields before submitting.");
    }
});
