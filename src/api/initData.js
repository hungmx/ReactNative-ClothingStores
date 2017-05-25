const initData = () => (
    fetch('http://192.168.1.19/api')
        .then(res => res.json())
);
export default initData;
//dùng ngoặc tròn để bao giá trị trả về