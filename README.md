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

## 17. Chạy container với port mapping
```sh
docker run -d -p 8080:80 nginx
```
![image](https://github.com/user-attachments/assets/b4ecfde0-4f64-4e7f-a827-172b537d558d)
#### Check port: 8080
![image](https://github.com/user-attachments/assets/90b0bb51-337c-49b5-9923-88eacea09701)


## 18. Xem thông tin chi tiết của container
```sh
docker inspect <container_id>
```
![image](https://github.com/user-attachments/assets/d5096643-651d-4f07-a899-3df5c2a613bd)
![image](https://github.com/user-attachments/assets/2a9532e1-7d71-4fd2-803c-25ba0667d36e)
![image](https://github.com/user-attachments/assets/29e9db16-b8f4-4470-8cd9-4461769aef7b)


## 19. Tạo volume và chạy container sử dụng volume
```sh
docker run -d -v mydata:/data nginx
```
#### chạy lệnh -> check lại bằng lệnh “docker volume ls”
![image](https://github.com/user-attachments/assets/52e8b5cd-4bc2-46ae-b80b-c44ec2317286)

## 20. Kiểm tra danh sách volume
```sh
docker volume ls
```
![image](https://github.com/user-attachments/assets/a5763b05-904f-4e07-9de8-e4f38f507a9c)

## 21. Xóa volume không sử dụng
```sh
docker volume prune
```
#### không xóa volume mydata vì nó đang được sử dụng 
![image](https://github.com/user-attachments/assets/e200bc11-b8d8-4f85-8d79-28a184ff22bf)

## 22. Chạy container với tên tùy chỉnh
```sh
docker run -d --name my_nginx nginx
```
![image](https://github.com/user-attachments/assets/7d7242d4-7405-41e3-a490-3358c8afec91)

## 23. Xem tài nguyên sử dụng của container
```sh
docker stats
```
![image](https://github.com/user-attachments/assets/602642ea-8ee8-461e-95e5-8fd0ee988e06)

## 24. Liệt kê danh sách network
```sh
docker network ls
```
![image](https://github.com/user-attachments/assets/63a1f306-58c3-4fba-bd82-5c76b74472e3)

## 25. Tạo network
```sh
docker network create my_network
```
#### chạy lệnh -> kiểm tra lại bằng docker network ls -> đã có network vừa tạo (my_network)
![image](https://github.com/user-attachments/assets/880692ca-f3b5-4537-bdf8-6145d6df4986)
## 26. Chạy container trong network đã tạo
```sh
docker run -d --network my_network --name my_container nginx
```
![image](https://github.com/user-attachments/assets/c4795c04-d761-4cb3-bc17-c9705c521ff3)

## 27. Kết nối container với network
```sh
docker network connect my_network my_nginx
```

#### run lệnh -> kiểm tra kết nối bằng “docker network inspect my_network”
![image](https://github.com/user-attachments/assets/d4b9703a-3eca-4656-89f9-6b0a489fe5ab)

## 28. Chạy container với biến môi trường
```sh
docker run -d -e MY_ENV=hello_world nginx
```

![image](https://github.com/user-attachments/assets/cd32316d-2c0b-4cef-bd5e-8f04fa1e5e0f)

## 29. Xem logs của container theo thời gian thực
```sh
docker logs -f my_nginx
```
![image](https://github.com/user-attachments/assets/546002f8-ecca-4d99-a779-58bf57e902c4)

## 30. Tạo Dockerfile
```Dockerfile
FROM nginx
COPY index.html /usr/share/nginx/html/index.html
```
![image](https://github.com/user-attachments/assets/23a09a40-47d8-408d-9d8c-cda87540027e)

## 31. Build image từ Dockerfile
```sh
docker build -t my_nginx_image .
```
![image](https://github.com/user-attachments/assets/07bceb98-26b9-4dc6-9224-08a49576dd3d)



# Phần 2: Thao tác với Dockerfile

## Bài 1: Tạo Dockerfile chạy một ứng dụng Node.js đơn giản

### Yêu cầu:  
- Viết Dockerfile để chạy một ứng dụng Node.js hiển thị "Hello, Docker!" trên cổng 3000.  
- Sử dụng `node:18` làm base image.

---

### **1. Setup**
Tạo một thư mục mới và thêm các file sau:

#### **app.js**
```javascript
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, Docker!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
```

#### **package.json**
```json
{
  "name": "docker-node-app",
  "version": "1.0.0",
  "main": "app.js",
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

#### **Dockerfile**
```dockerfile
# Sử dụng node:18 làm base image
FROM node:18

# Đặt thư mục làm việc trong container
WORKDIR /app

# Copy file package.json và package-lock.json
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ mã nguồn vào container
COPY . .

# Expose cổng 3000
EXPOSE 3000

# Lệnh chạy ứng dụng
CMD ["node", "app.js"]
```

---
![image](https://github.com/user-attachments/assets/220fb65b-dc80-45dc-bf93-7ddff13acc2e)

### **2. Build Docker Image**
```sh
docker build -t my-node-app .
```

---
![image](https://github.com/user-attachments/assets/97107b58-a630-4fa9-bfda-ceaaeb36a7e8)

### **3. Test Docker Container**
Chạy container từ image đã build:
```sh
docker run -d -p 3000:3000 my-node-app
```

Kiểm tra ứng dụng bằng trình duyệt hoặc cURL:
```sh
curl http://localhost:3000
```

Nếu thành công, bạn sẽ thấy thông báo:
```
Hello, Docker!
```
![image](https://github.com/user-attachments/assets/405eeef4-eb19-4419-98ed-f5079f462f38)



