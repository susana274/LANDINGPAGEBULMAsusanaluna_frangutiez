document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Get form values
        const nom = document.getElementById("nom").value.trim();
        const correu = document.getElementById("correu").value.trim();
        const missatge = document.getElementById("missatge").value.trim();

        // Validate form fields
        if (!nom) {
            alert("El camp de nom està buit.");
            return;
        }

        if (!correu || !isValidEmail(correu)) {
            alert("Si us plau, introdueix un correu electrònic vàlid.");
            return;
        }

        if (!missatge) {
            alert("El camp de missatge està buit.");
            return;
        }

        // If validation is successful
        alert("Formulari enviat correctament!");
        form.reset();
    });

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
