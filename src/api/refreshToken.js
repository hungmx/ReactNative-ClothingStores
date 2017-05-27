import saveToken from './saveToken';

const refreshToken = (token) => {
    fetch('http://192.168.1.19/api/refresh_token.php',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ token: token })
        })
        // . text hoac json tuy thuoc vao server tra ve
        .then(res => res.text())
        .then(tokenToSave => saveToken(tokenToSave));
};

export default refreshToken;
