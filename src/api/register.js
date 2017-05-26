const register = (email, name, password) => (
    fetch('http://192.168.1.19/api/register.php',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ email: email, name: name, password: password })
        })
        // . text hoac json tuy thuoc vao server tra ve
        .then(res => res.text())
);
export default register;
