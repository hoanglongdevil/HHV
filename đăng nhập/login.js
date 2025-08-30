document.addEventListener('DOMContentLoaded', () => {
    // Logic form đăng nhập (giữ nguyên)
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = usernameInput.value.trim();
        const password = passwordInput.value;

        if (username === '' || password === '') {
            errorMessage.style.display = 'block';
            errorMessage.innerHTML = 'Vui lòng điền đầy đủ thông tin đăng nhập.';
            return;
        }

        if (username === 'test@example.com' && password === '123456') {
            alert('Đăng nhập thành công!');
            errorMessage.style.display = 'none';
        } else {
            errorMessage.style.display = 'block';
            errorMessage.innerHTML = 'Số điện thoại/Email hoặc mật khẩu không đúng.';
        }
    });

    // Phần tạo mã QR
    const qrcodeElement = document.getElementById("qrcode");
    const urlToEncode = "https://www.facebook.com/groups/kiemtientrenmang.hanhhieuviet"; // Thay đổi URL này thành đường dẫn bạn muốn

    // Tạo mã QR với qrcodejs
    new QRCode(qrcodeElement, {
        text: urlToEncode,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
});