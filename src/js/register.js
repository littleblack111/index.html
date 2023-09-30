function createAccount() {
    if (document.getElementById("password").value == document.getElementById("verify-password").value) {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        console.log(username);
        console.log(password);
    } else {
        console.log("password does not match");
    }
}
