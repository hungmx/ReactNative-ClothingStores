const changeInfo = (token, name, phone, address) => (
    fetch('http://192.168.1.19/api/change_info.php',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ token: token, name: name, phone: phone, address: address })
        })
        // . text hoac json tuy thuoc vao server tra ve
        .then(res => res.json())
);
export default changeInfo;
