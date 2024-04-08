document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('authorization-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const dateInput = document.getElementById('date');
        const selectedDate = new Date(dateInput.value);
        const currentDate = new Date();

        // Check if the selected date is in the past
        if (selectedDate < currentDate) {
            alert('Vous ne pouvez pas sélectionner une date passée.');
            return;
        }

        // If the date is valid, redirect to the other website
        window.location.href = "backoffice.html";
    });
});
