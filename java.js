
        function saveRegistration() {
            const firstName = document.getElementById('firstName').value.trim();
            const middleInitial = document.getElementById('middleInitial').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            const age = document.getElementById('age').value.trim();
            const gmail = document.getElementById('gmail').value.trim();
            const messageDiv = document.getElementById('regMessage');

            if (!firstName || !middleInitial || !lastName || !age || !gmail) {
                messageDiv.textContent = "Error: Fill in all required fields!";
                messageDiv.style.color = "red";
                return;
            }

            const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
            if (!gmailRegex.test(gmail)) {
                messageDiv.textContent = "Error: Enter a valid Gmail account!";
                messageDiv.style.color = "red";
                return;
            }

            const regData = {
                firstName: firstName,
                middleInitial: middleInitial,
                lastName: lastName,
                age: age,
                gmail: gmail
            };

            let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
            registeredUsers.push(regData);

            
            localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

            
            messageDiv.textContent = "Success: Registration saved!";
            messageDiv.style.color = "green";
            clearForm();

            
            displayStoredData();
        }

        
        function clearForm() {
            document.getElementById('firstName').value = "";
            document.getElementById('middleInitial').value = "";
            document.getElementById('lastName').value = "";
            document.getElementById('age').value = "";
            document.getElementById('gmail').value = "";
        }

        
        function displayStoredData() {
            const container = document.getElementById('storedDataContainer');
            const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

            
            if (registeredUsers.length === 0) {
                container.innerHTML = "<p style='text-align:center;'>No registered information yet.</p>";
                return;
            }

        
            let html = "";
            registeredUsers.forEach((user, index) => {
                html += `
                    <div class="stored-data-item">
                        <p><strong>Registration #${index + 1}</strong></p>
                        <p>Full Name: ${user.firstName} ${user.middleInitial}. ${user.lastName}</p>
                        <p>Age: ${user.age}</p>
                        <p>Gmail: ${user.gmail}</p>
                    </div>
                `;
            });
            container.innerHTML = html;
        }

        
        window.onload = displayStoredData;

        
        function checkLogin(event) {
            event.preventDefault(); // Prevent form submission

            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();
            const messageDiv = document.getElementById('loginMessage');

            if (username === "" || password === "") {
                messageDiv.textContent = "Error: Please fill in all fields!";
                messageDiv.style.color = "#f44336"; /* Red error color */
            } else {
                messageDiv.textContent = "Success: Login information submitted!";
                messageDiv.style.color = "#4caf50"; /* Green success color */

                
            }
        }
    
    