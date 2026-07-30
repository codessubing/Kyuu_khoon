document.querySelectorAll(".togglePassword").forEach(function (icon) {

    icon.addEventListener("click", function () {

        const password = document.getElementById(
            this.getAttribute("data-target")
        );

        if (password.type === "password") {
            password.type = "text";
            this.textContent = "visibility"; // show normal eye
        } else {
            password.type = "password";
            this.textContent = "visibility_off"; // show crossed eye
        }

    });

});