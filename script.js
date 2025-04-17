document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form refresh

            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let contact = document.getElementById("contact").value.trim();
            let address = document.getElementById("address").value.trim();

            if (name === "" || email === "" || contact === "" || address === "") {
                alert("All fields are required!");
                return;
            }

            let user = { name, email, contact, address };

            let users = JSON.parse(localStorage.getItem("users")) || [];
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));

            alert("User Registered Successfully!");
            registerForm.reset(); // Reset form fields
        });
    }

    const userTable = document.getElementById("userTable");

    if (userTable) {
        let users = JSON.parse(localStorage.getItem("users")) || [];

        if (users.length === 0) {
            userTable.innerHTML = `<tr><td colspan="4" class="text-center">No users found!</td></tr>`;
        } else {
            users.forEach(user => {
                let row = `<tr>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.contact}</td>
                    <td>${user.address}</td>
                </tr>`;
                userTable.innerHTML += row;
            });
        }
    }
});
