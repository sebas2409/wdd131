document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("ticketForm");
    const typeSelect = document.getElementById("type");
    const dynamicSection = document.getElementById("dynamicSection");
    const dynamicLabel = document.getElementById("dynamicLabel");
    const dynamicInput = document.getElementById("dynamicInput");

    const errorsContainer = document.getElementById("errors");
    const successDisplay = document.getElementById("successDisplay");


    typeSelect.addEventListener("change", (e) => {
        const value = e.target.value;

        if (value === "student") {
            dynamicSection.classList.remove("hidden");
            dynamicLabel.textContent = "Student I#";
            dynamicInput.value = "";
        } else if (value === "guest") {
            dynamicSection.classList.remove("hidden");
            dynamicLabel.textContent = "Access Code";
            dynamicInput.value = "";
        } else {
            dynamicSection.classList.add("hidden");
        }
    });


    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Evita que la página se recargue


        errorsContainer.innerHTML = "";
        successDisplay.classList.add("hidden");
        let errorList = [];


        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const email = document.getElementById("email").value.trim();
        const type = typeSelect.value;
        const eventDate = document.getElementById("eventDate").value;
        const dynamicValue = dynamicInput.value.trim();


        if (!firstName || !lastName || !email || !type || !eventDate) {
            errorList.push("All basic fields are required.");
        }


        if (eventDate) {
            const selectedDate = new Date(eventDate);
            selectedDate.setMinutes(selectedDate.getMinutes() + selectedDate.getTimezoneOffset()); // Ajuste de zona horaria local

            const today = new Date();
            today.setHours(0, 0, 0, 0); // Ignorar hora para comparar solo el día

            if (selectedDate <= today) {
                errorList.push("Event Date must be later than the current date.");
            }
        }


        if (type === "student") {

            const regex = /^\d{9}$/;
            if (!regex.test(dynamicValue)) {
                errorList.push("Student I# must be 9 digits");
            }
        } else if (type === "guest") {

            if (dynamicValue !== "EVENT131") {
                errorList.push("Invalid Access Code.");
            }
        }


        if (errorList.length > 0) {
            errorList.forEach(errorText => {
                const p = document.createElement("p");
                p.textContent = errorText;
                errorsContainer.appendChild(p);
            });
        } else {

            document.getElementById("outName").textContent = `${firstName} ${lastName}`;
            document.getElementById("outType").textContent = type;
            document.getElementById("outDate").textContent = eventDate;

            successDisplay.classList.remove("hidden");


            form.reset();
            dynamicSection.classList.add("hidden");
        }
    });
});