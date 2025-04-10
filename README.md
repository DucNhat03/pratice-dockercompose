# Phần 1: Một số lệnh Docker Compose cơ bản

## 1. Kiểm tra phiên bản Docker compose
```sh
docker compose version
```
![image](https://github.com/user-attachments/assets/6aba0982-233f-49b3-a587-c53c8ef82d05)


## 2. Chạy container kiểm tra
- setup thư mục
![image](https://github.com/user-attachments/assets/618d4b15-77c2-40b0-bff6-fdf5e03fa756)
![image](https://github.com/user-attachments/assets/f5bdc844-3d80-45b5-9475-0cb7fd1f914a)


```sh
docker compose up
```
![image](https://github.com/user-attachments/assets/02038b7a-8bbb-4fc2-942e-61fc9e94f3b0)
![image](https://github.com/user-attachments/assets/fdea5842-ed5e-49b7-a6ac-3467bface474)


## 3. Chạy container nhưng không hiển thị log trong CMD
```sh
docker compose up -d
```
![image](https://github.com/user-attachments/assets/352118a1-c481-487f-9519-dc8f0928cd39)


## 4. Xem danh sách container đang chạy.
```sh
docker compose ps
```
![image](https://github.com/user-attachments/assets/2e604ba0-2824-4d26-af76-8f81e7940987)

## 5. Dừng và xóa container
```sh
5.docker compose down
```
- Dùng để Dừng và xóa container
- Nó chỉ Xóa container nhưng giữ lại volume
![image](https://github.com/user-attachments/assets/6af29bdd-dc63-44ce-afa1-f46506951bd7)


## 6. Dùng để khởi động lại container
```sh
docker compose restart
```
![image](https://github.com/user-attachments/assets/d75aa9e1-00c2-435c-b862-9345cf24201c)


## 7. Xem log theo thời gian thực.
```sh
7.docker compose logs -f
```
![image](https://github.com/user-attachments/assets/1db9188f-84cd-495d-a991-605a11fdf3b2)


## 8. Liệt kê toàn bộ container (bao gồm container đã dừng)
```sh
docker ps -a
```
![image](https://github.com/user-attachments/assets/577afa8b-d463-4a73-a28d-b1ffe9160354)
![image](https://github.com/user-attachments/assets/7ca8a2b1-514d-4b31-b33f-4687c271c8ad)
![image](https://github.com/user-attachments/assets/4d44f880-b8bf-473a-a432-7d49dbf91423)

## 9. Build lại container
```sh
8.docker compose build	
```
- docker compose build: dùng để Build lại image
- docker compose up -d --build: dùng để Build lại image và chạy container
![image](https://github.com/user-attachments/assets/99dc6218-9901-4e0b-892a-0767749b510b)


## 10. 9.docker compose exec <service_name> <command>
```sh
docker compose exec web bash
```
- docker compose exec: Thực thi lệnh bên trong container đang chạy.
- web: Tên của dịch vụ (container) mà bạn muốn truy cập.
- bash: Mở terminal shell bên trong container.
![image](https://github.com/user-attachments/assets/ceaf16db-b699-47cd-91a9-7a5adad975ec)
- display xem một vài thông tin
![image](https://github.com/user-attachments/assets/914c6a28-1934-403e-8357-d5f3a8a83e6d)
- nhập ‘exit’ để thoát

## 11. docker compose down -v
```sh
docker compose down -v
```
- dừng và xóa tất cả container, và nếu muốn xóa cả volume (dữ liệu MySQL)
![image](https://github.com/user-attachments/assets/2c168b02-8730-43ed-a71b-8070fc672267)


## 12. docker compose run <service_name> <command>
```sh
docker compose run web ls
```
- docker compose run web ls: Chạy lệnh ls trong container web.
![image](https://github.com/user-attachments/assets/bfdf0fc3-df0a-46e8-baf3-c51e4d3d712e)


## 13. docker compose stop <service_name>
```sh
docker rm <container_id>
```
- docker compose ps để xem danh sách 
![image](https://github.com/user-attachments/assets/2a7acb0f-63cf-40b0-a32c-d1e8ad85f484)
- docker compose stop: Dừng container nhưng không xóa
![image](https://github.com/user-attachments/assets/42509d5b-1168-43c4-bc4d-6a0a8ec50476)

## 14. docker compose rm <service_name>
```sh
docker compose rm web
```
- b1: dừng container bằng: docker compose stop web
![image](https://github.com/user-attachments/assets/8f2bc358-0cca-4c9b-959c-190d710b6cb1)

- b2: run lệnh “docker compose rm web”: Xóa container nhưng không xóa volume

![image](https://github.com/user-attachments/assets/4f67a294-384e-4cd1-b932-49e3ceacf461)

## 15. docker compose config
```sh
docker compose config
```
- Kiểm tra và hiển thị file docker-compose.yml sau khi Docker Compose phân tích.
- Giúp phát hiện lỗi cấu hình nếu có.

![image](https://github.com/user-attachments/assets/e797df0d-b74c-4a80-bfad-4b1b6188abb7)

-> Không có lỗi, chỉ có cảnh báo version đã lỗi thời: "the attribute 'version' is obsolete, it will be ignored, please remove it to avoid potential confusion"
-> Cách khắc phục: Mở file docker-compose.yml và xóa dòng ‘version: "3.8"’

## 16. docker compose up -d --build
```sh
docker compose up -d --build
```
docker compose up:Khởi động tất cả container theo docker-compose.yml
-d: Chạy container ở chế độ nền (detached mode)
--build: Build lại image trước khi chạy (nếu có thay đổi)

![image](https://github.com/user-attachments/assets/3369a552-edb7-4d11-8c01-bc267fe0dc23)


# Phần 2: Thao tác với Docker Composefile

## ✅ Bài 2: Chạy MySQL với Docker Compose

### 📌 Yêu cầu:
- Tạo một container chạy MySQL phiên bản 8.0.
- Đặt username là user, password là password và database là mydb

### ▶️ Chạy:
```sh
docker compose up -d
```

### 🧪 Kiểm tra:
```sh
docker compose exec db mysql -u user -p
# Nhập mật khẩu: root
```

---

## ✅ Bài 3: Kết nối MySQL với PHPMyAdmin

### 📌 Yêu cầu:
- Chạy MySQL và PHPMyAdmin với Docker Compose.
- PHPMyAdmin chạy trên cổng 8081.

### 🧪 Truy cập: 
- Trình duyệt: http://localhost:8081
- Server: db
- User: root
- Password: root

---

## ✅ Bài 4: Chạy ứng dụng Node.js với Docker Compose

### 📌 Yêu cầu:
- Chạy một ứng dụng Node.js đơn giản với Express.

---

## ✅ Bài 5: Chạy Redis với Docker Compose

### 📌 Yêu cầu:
- Chạy container Redis đơn giản.

### 📄 docker-compose.yml:
```yaml
services:
  redis:
    image: redis
    container_name: redis
    ports:
      - "6379:6379"
```

### ▶️ Chạy:
```bash
docker compose up -d
```

---

## ✅ Bài 6: Chạy nhiều container cùng lúc

### 📌 Yêu cầu:
- Chạy 3 service: frontend, backend và database (MySQL)

### 📄 docker-compose.yml:
```yaml
version: "3.8"
services:
  db:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: mydb
      MYSQL_USER: user
      MYSQL_PASSWORD: password

  backend:
    build: ./backend
    depends_on:
      - db

  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    depends_on:
      - backend
```

---

## ✅ Bài 7: Chạy MongoDB với Docker Compose

### 📌 Yêu cầu:
- Chạy MongoDB và Mongo Express

### 📄 docker-compose.yml:
```yaml
version: '3'
services:
  mongo:
    image: mongo
    ports:
      - "27017:27017"
    container_name: mongodb

  mongo-express:
    image: mongo-express
    ports:
      - "8082:8081"
    environment:
      ME_CONFIG_MONGODB_SERVER: mongo
```

---

## ✅ Bài 8: Kết nối nhiều dịch vụ với Docker Compose

### 📌 Yêu cầu:
- Chạy ứng dụng Node.js kết nối với MySQL

### 📄 docker-compose.yml:
```yaml
version: '3.8'
services:
  db:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: mydb
      MYSQL_USER: user
      MYSQL_PASSWORD: password

  app:
    build: .
    ports:
      - "3001:3000"
    depends_on:
      - db
```

---

## ✅ Bài 9: Chạy ứng dụng Python Flask với Docker Compose

### 📌 Yêu cầu:
- Chạy ứng dụng Flask đơn giản

### 📄 Dockerfile:
```dockerfile
FROM python:3.9
WORKDIR /app
COPY . .
RUN pip install -r requirements.txt
CMD ["python", "app.py"]
```

### 📄 docker-compose.yml:
```yaml
version: '3'
services:
  flask-app:
    build: .
    ports:
      - "5000:5000"
```

---

## ✅ Bài 10: Lưu trữ dữ liệu với Docker Volumes

### 📌 Yêu cầu:
- Chạy MySQL với volume để giữ lại dữ liệu

### 📄 docker-compose.yml:
```yaml
version: '3'
services:
  mysql-volume:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: mydb
    volumes:
      - mysql_data:/var/lib/mysql
volumes:
  mysql_data:
```

---

## ✅ Bài 11: Chạy dịch vụ Postgres với Adminer

### 📌 Yêu cầu:
- PostgreSQL với database `mydb`, user `user`, password `password`
- Adminer chạy trên cổng 8083

### 📄 docker-compose.yml:
```yaml
version: '3'
services:
  postgres:
    image: postgres
    environment:
      POSTGRES_DB: mydb
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password

  adminer:
    image: adminer
    ports:
      - "8083:8080"
```

---

## ✅ Bài 12: Giám sát container với Prometheus và Grafana

### 📌 Yêu cầu:
- Chạy Prometheus, Grafana và Node Exporter bằng Docker Compose

### 📄 docker-compose.yml:
```yaml
version: '3.7'
services:
  prometheus:
    image: prom/prometheus
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
    ports:
      - "9090:9090"

  node-exporter:
    image: prom/node-exporter
    ports:
      - "9100:9100"

  grafana:
    image: grafana/grafana
    ports:
      - "3000:3000"
```

### 📄 prometheus.yml:
```yaml
global:
  scrape_interval: 15s
scrape_configs:
  - job_name: 'node'
    static_configs:
      - targets: ['node-exporter:9100']
```

![image](https://github.com/user-attachments/assets/d0a73985-9b9e-4249-83e1-aad9d23a34c4)



