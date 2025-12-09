# 🚀 Quick Start Guide - Deploy Backend trên EC2

## ⚠️ Các lỗi thường gặp và cách xử lý

### 1. Lỗi "Permission denied" khi chạy deploy.sh

Nếu bạn gặp lỗi:
```bash
-bash: ./deploy.sh: Permission denied
```

**Giải pháp:**
```bash
chmod +x deploy.sh
./deploy.sh
```

### 2. Lỗi "permission denied" với Docker API

Nếu bạn gặp lỗi:
```bash
permission denied while trying to connect to the docker API at unix:///var/run/docker.sock
```

**Giải pháp nhanh (Không cần logout):**
```bash
# Thêm user vào docker group
sudo usermod -aG docker $USER

# Apply thay đổi ngay
newgrp docker

# Kiểm tra
docker ps
```

**Hoặc logout và login lại:**
```bash
exit
# Sau đó login lại và chạy lại script
```

## 📋 Các bước deploy đầy đủ:

### 1. Clone repository (nếu chưa có)
```bash
git clone https://github.com/phuongloannn/bicycle-web.git
cd bicycle-web
```

### 2. Cấp quyền thực thi cho script
```bash
chmod +x deploy.sh
```

### 3. Chạy script deploy
```bash
./deploy.sh
```

Script sẽ tự động:
- ✅ Kiểm tra và cài Docker (nếu chưa có)
- ✅ Kiểm tra và cài Docker Compose (nếu chưa có)
- ✅ Tạo file `.env` từ `env.example`
- ✅ Tạo `docker-compose.yml` (nếu chưa có)
- ✅ Deploy MySQL và Backend

### 4. Nếu gặp lỗi "permission denied" với Docker

Sau khi script cài Docker, bạn sẽ thấy thông báo:
```
✓ Docker installed. Please logout and login again, then run this script again.
```

**Giải pháp:**

**Cách 1: Logout và login lại (Khuyến nghị)**
```bash
# Logout
exit

# Login lại
ssh -i your-key.pem ubuntu@your-ec2-ip

# Chạy lại script
cd bicycle-web
./deploy.sh
```

**Cách 2: Thêm user vào docker group và apply ngay (Không cần logout)**
```bash
# Thêm user vào docker group
sudo usermod -aG docker $USER

# Apply thay đổi ngay (không cần logout)
newgrp docker

# Kiểm tra Docker đã hoạt động
docker ps

# Chạy lại script
./deploy.sh
```

**Cách 3: Dùng sudo (Tạm thời)**
```bash
# Chạy Docker với sudo (không khuyến nghị)
sudo docker ps

# Hoặc chạy script với sudo
sudo ./deploy.sh
```

## 🔧 Các lệnh hữu ích khác:

### Kiểm tra Docker đã cài chưa:
```bash
docker --version
docker compose version
```

### Xem logs:
```bash
docker compose logs -f backend
```

### Kiểm tra services:
```bash
docker compose ps
```

### Stop services:
```bash
docker compose down
```

### Restart services:
```bash
docker compose restart
```

## 📝 Lưu ý:

- Đảm bảo Security Group đã mở port 3000 (backend) và 3306 (database nếu cần)
- File `.env` sẽ được tạo ở thư mục gốc (cùng cấp với docker-compose.yml)
- Database sẽ tự động import từ `data/database.sql` khi container start lần đầu

