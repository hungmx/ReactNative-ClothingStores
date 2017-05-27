const checkLogin = (token) => (
    fetch('http://192.168.1.19/api/check_login.php',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ token: token })
        })
        // . text hoac json tuy thuoc vao server tra ve
        .then(res => res.json())
);
export default checkLogin;
