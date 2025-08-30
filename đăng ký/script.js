document.addEventListener('DOMContentLoaded', () => {
    const phoneInput = document.getElementById('phone');
    const sendOtpBtn = document.getElementById('send-otp-btn');
    const otpInputGroup = document.getElementById('otp-input-group');
    const otpInput = document.getElementById('otp');
    const verifyOtpBtn = document.getElementById('verify-otp-btn');
    const registerForm = document.getElementById('register-form');

    // Giả lập chức năng gửi mã OTP
    sendOtpBtn.addEventListener('click', () => {
        const phoneNumber = phoneInput.value;
        if (phoneNumber) {
            // Phần mô phỏng: hiển thị thông báo và hiện trường nhập OTP
            alert('Mã OTP đã được gửi đến ' + phoneNumber + '. (Mã giả lập: 123456)');
            otpInputGroup.style.display = 'flex';
            sendOtpBtn.disabled = true;
        } else {
            alert('Vui lòng nhập số điện thoại.');
        }
    });

    // Giả lập chức năng xác thực OTP
    verifyOtpBtn.addEventListener('click', () => {
        const otpCode = otpInput.value;
        if (otpCode) {
            // Phần mô phỏng: kiểm tra mã OTP giả lập
            if (otpCode === '123456') {
                alert('Xác thực OTP thành công!');
                // Vô hiệu hóa trường OTP để người dùng không thay đổi nữa
                otpInput.disabled = true;
                verifyOtpBtn.disabled = true;
            } else {
                alert('Mã OTP không hợp lệ.');
            }
        } else {
            alert('Vui lòng nhập mã OTP.');
        }
    });

    // Xử lý form đăng ký
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Kiểm tra mật khẩu
        if (password !== confirmPassword) {
            alert('Mật khẩu xác nhận không khớp.');
            return;
        }

        // Kiểm tra xem OTP đã được xác thực chưa
        if (!otpInput.disabled) {
            alert('Vui lòng xác thực mã OTP trước khi đăng ký.');
            return;
        }

        // Lấy tất cả dữ liệu từ form
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const referralCode = document.getElementById('referral-code').value;

        // Phần mô phỏng đăng ký thành công
        alert('Đăng ký thành công!');
        // Bạn có thể reset form ở đây
        registerForm.reset();
        
        // Cần reset lại trạng thái của các nút và trường OTP
        otpInputGroup.style.display = 'none';
        sendOtpBtn.disabled = false;
        otpInput.disabled = false;
        verifyOtpBtn.disabled = false;
    });
});