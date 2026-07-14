// =========================================
// Express Assignments
// Shared JavaScript
// =========================================

// =========================================
// USERS PAGE
// =========================================

const usersTable = document.getElementById("usersTable");

if (usersTable) {

    async function loadUsers() {

        try {

            const response = await fetch("/api/users");

            const users = await response.json();

            usersTable.innerHTML = "";

            users.forEach(user => {

                usersTable.innerHTML += `

                    <tr>

                        <td>${user.id}</td>

                        <td>${user.name}</td>

                    </tr>

                `;

            });

        }

        catch (error) {

            usersTable.innerHTML = `

                <tr>

                    <td colspan="2">

                        Unable to load users.

                    </td>

                </tr>

            `;

        }

    }

    loadUsers();

}

// =========================================
// WEATHER PAGE
// =========================================

const weatherBtn = document.getElementById("weatherBtn");

if (weatherBtn) {

    weatherBtn.addEventListener("click", async () => {

        const city = document.getElementById("city").value.trim();

        if (city === "") {

            alert("Please enter a city name.");

            return;

        }

        try {

            const response = await fetch(`/weather/${city}`);

            const weather = await response.json();

            document.getElementById("cityName").innerText = weather.city;

            document.getElementById("temperature").innerText = weather.temperature;

        }

        catch (error) {

            document.getElementById("cityName").innerText = "Error";

            document.getElementById("temperature").innerText = "Unable to fetch weather.";

        }

    });

}