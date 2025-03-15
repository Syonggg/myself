function saveUsername() {
    let username = document.getElementById("username").value;
    
    if (username.trim() === "") {
        alert("Please enter a username.");
        return;
    }

    // Save username to local storage
    localStorage.setItem("username", username);

    // Show an alert (for testing)
    alert("Username saved! In a real website, you'd be redirected now.");
}
