# Bicycle Web Backend (NestJS)

Dự án backend cho hệ thống bán xe đạp, sử dụng **NestJS**, **MySQL** và **TypeORM**.

## 🚀 Hướng dẫn khởi chạy

### 1. Yêu cầu hệ thống
- **Node.js**: v18+ (khuyên dùng v20+)
- **MySQL**: v8.0+

### 2. Cài đặt dependencies
Mở terminal tại thư mục `bicycle-web` và chạy:
```bash
npm install
```

### 3. Cấu hình môi trường (.env)
Sao chép file `.env.example` thành `.env` (nếu chưa có) và cập nhật thông tin kết nối database:
```env
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASS=your_password
DB_NAME=bicycle_web

PORT=3000
JWT_SECRET=your_jwt_secret_key
```

### 4. Thiết lập Cơ sở dữ liệu
1. Mở MySQL Client (như MySQL Workbench, Navicat hoặc Terminal).
2. Tạo database mới tên là `bicycle_web`.
3. Import dữ liệu từ file: `data/database.sql`.
   - Lệnh Terminal: `mysql -u root -p bicycle_web < data/database.sql`

### 5. Chạy ứng dụng
```bash
# Chế độ phát triển (watch mode)
npm run start:dev

# Chế độ Production
npm run build
npm run start:prod
```

## 📚 Tài liệu API (Swagger)
Sau khi start server, bạn có thể truy cập tài liệu API chi tiết tại:
[http://localhost:3000/api](http://localhost:3000/api)

## 📁 Cấu trúc thư mục chính
- `src/modules`: Chứa các module nghiệp vụ (Products, Orders, Auth, etc.)
- `src/common`: Chứa các cấu hình chung, database connection, middlewares.
- `uploads/`: Thư mục lưu trữ ảnh sản phẩm tải lên.
- `data/`: Chứa file SQL mẫu.
