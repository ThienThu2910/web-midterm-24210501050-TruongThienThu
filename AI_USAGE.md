# AI Usage Report

**1. Em có sử dụng AI không?**
Có.

**2. Đã dùng AI để hỗ trợ phần nào?**
* Tạo khung giao diện HTML cơ bản bằng Bootstrap và chia tách cấu trúc website thành dạng nhiều trang (Multi-page).
* Viết code JavaScript xử lý các logic chính: render danh sách khóa học, chức năng tìm kiếm và lọc dữ liệu, form validation.
* Xử lý logic lưu trữ, hiển thị và xóa dữ liệu đăng ký bằng LocalStorage.
* Phát triển thêm tính năng nâng cao: Chế độ Sáng/Tối (Dark/Light Mode).
* Giải thích các đoạn code phức tạp (chức năng tìm kiếm, vòng lặp mảng) để hiểu rõ và chuẩn bị cho phần thi vấn đáp.

**3. Prompt hoặc nội dung yêu cầu AI hỗ trợ**
* "Bạn hãy làm theo các yêu cầu trong file. Làm thành 3 file: 1 html, 1css, 1 js."
* "Cấu trúc thư mục yêu cầu như thế này. Bạn hãy làm lại cho tôi theo đúng cấu trúc trên."
* "Bạn hãy giải thích cho tôi code trong file main."
* "Giảng viên yêu cầu tôi làm thêm một số ý tưởng mới cho trang web bạn hãy giới thiệu cho tôi."
* "Bạn hãy thêm chức năng chế độ sáng/tối cho tôi."
* "Giảng viên của tôi đã hỏi: tại sao khi nhấn tìm kím thì có thể tìm ra được nội dung liên quan?"

**4. Đã chỉnh sửa gì sau khi AI sinh code?**
* Cập nhật đầy đủ thông tin cá nhân (Họ tên: Trương Thiện Thư, MSSV: 24210501050) vào Footer của tất cả các trang.
* Tự tạo lập cấu trúc thư mục thực tế trên phần mềm VS Code (`BAIGIUKYLTW`, `assets`, `css`, `js`, `images`).
* Chỉnh sửa lại các đường dẫn tương đối (relative paths) của file CSS, JS và hình ảnh để trang web kết nối chính xác.
* Tự tải và bổ sung các hình ảnh thực tế (banner, hình ảnh khóa học) vào thư mục `assets/images/` để giao diện hiển thị trực quan và đẹp mắt hơn.

**5. Phần nào sinh viên tự viết?**
* Quản lý dự án, tổ chức toàn bộ các file mã nguồn trên máy tính cục bộ (local).
* Thực hiện việc lắp ghép, kiểm tra lỗi và đồng bộ nút chức năng Dark Mode, thanh Navbar, Footer cho toàn bộ 4 trang HTML.
* Trực tiếp thực hiện các câu lệnh Git để đưa mã nguồn lên GitHub.
* Cấu hình và triển khai (deploy) website thành công bằng GitHub Pages.

**6. Sinh viên học được gì từ quá trình dùng AI?**
* Hiểu rõ luồng hoạt động của JavaScript thuần khi thao tác với DOM và bắt sự kiện (Event Listener).
* Nắm vững cách kết hợp các hàm xử lý mảng và chuỗi trong JavaScript (`filter`, `includes`, `toLowerCase`) để tạo ra một bộ lọc tìm kiếm hoạt động theo thời gian thực (real-time).
* Hiểu được cơ chế hoạt động của LocalStorage: cách chuyển đổi dữ liệu mảng thành chuỗi (`JSON.stringify`) để lưu trữ, và cách dịch ngược lại (`JSON.parse`) để lấy dữ liệu ra hiển thị lên bảng.
* Biết cách quản lý giao diện Sáng/Tối bằng cách sử dụng class trong CSS kết hợp với LocalStorage để lưu giữ tùy chọn của người dùng.