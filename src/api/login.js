const login = (email, password) => (
    fetch('http://192.168.1.19/api/login.php',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ email: email, password: password })
        })
        // . text hoac json tuy thuoc vao server tra ve
        .then(res => res.json())
);
export default login;
