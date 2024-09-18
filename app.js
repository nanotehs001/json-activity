document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page
    
    // Step 1: Capture form data
    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);  // Convert string to number
    const email = document.getElementById("email").value;
    const hobbies = document.getElementById("hobbies").value.split(",").map(hobby => hobby.trim()); // Create an array of hobbies

    // Step 2: Dynamically populate the object
    const user = {
        name: name,
        age: age,
        email: email,
        hobbies: hobbies
    };

    // Step 3: Serialize the object to JSON string
    const jsonString = JSON.stringify(user, null, 2); // Pretty-print with 2-space indentation

    // Step 4: Output the JSON string to the webpage
    document.getElementById("jsonOutput").textContent = jsonString;
});
