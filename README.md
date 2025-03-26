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

## Bài 1: Chạy một container đơn giản với Docker Compose		
- Yêu cầu:	
- Tạo một container chạy Nginx bằng Docker Compose.	
- Map cổng 8080 của máy host với cổng 80 của container.
- setup 
![image](https://github.com/user-attachments/assets/da900d16-9c42-449f-9f0b-45acbd4e0751)
- nội dung file docker-compose.yml
![image](https://github.com/user-attachments/assets/2767c737-61d5-4565-b539-27034cfd5ede)
- Chạy container với Docker Compose: docker compose up -d
![image](https://github.com/user-attachments/assets/053cd31f-633c-4acb-a4a4-cbd966036d3f)
- Kiểm tra container có chạy không ? 
```sh
docker compose ps
```
![image](https://github.com/user-attachments/assets/2d024ffb-4aee-454d-a277-393fff335cf6)
- Truy cập: http://localhost:8080 để kiểm tra
![image](https://github.com/user-attachments/assets/44d1fb47-8c69-40b5-b2b2-ced98337dfdd)

## Bài 2: Chạy MySQL với Docker Compose	
- Yêu cầu:		
- Tạo một container chạy MySQL phiên bản 8.0.		
- Đặt username là user, password là password và database là mydb

- setup 
![image](https://github.com/user-attachments/assets/c8000bfa-49f2-4ec0-bc79-dd0fe77be281)
- nội dung file docker-compose.yml
![image](https://github.com/user-attachments/assets/584ecbee-3372-41ac-b59b-4bbee7674961)
- Chạy container với Docker Compose:
```sh
docker compose up -d
```
![image](https://github.com/user-attachments/assets/519b1838-6018-446f-8576-a34e755fb108)
- Kiểm tra container có chạy không ? docker compose ps
![image](https://github.com/user-attachments/assets/6c9454da-620e-440c-8812-6aad5dc63826)
- Kiểm tra kết quả:
B1: dùng docker CLI: docker compose exec db mysql -u user -p
B2: Nhập mật khẩu: root
B3: Kết quả:
![image](https://github.com/user-attachments/assets/91113c72-d3f0-4146-abf2-9cb49a24cab6)

## Bài 3: Kết nối MySQL với PHPMyAdmin
- Yêu cầu:	
- Chạy MySQL và PHPMyAdmin với Docker Compose.	
- PHPMyAdmin chạy trên cổng 8081.	
- setup
![image](https://github.com/user-attachments/assets/da14619b-e273-439f-91a9-acbd30a9e7d0)
- docker compose file
![image](https://github.com/user-attachments/assets/51bab1c4-7300-470c-9df9-f7e638759619)
- run docker compose
![image](https://github.com/user-attachments/assets/d0639c27-5602-4d00-ace2-e7c2cb2f2102)
![image](https://github.com/user-attachments/assets/957923b7-989b-4aac-9b66-d6b6af507197)
- Kiểm tra container có chạy không ? 
```sh
docker compose ps
```
![image](https://github.com/user-attachments/assets/2f949ee5-faa1-4c83-acab-f83176a28d03)
-- Mở trình duyệt và truy cập: http://localhost:8081
Thông tin đăng nhập PHPMyAdmin:
Server: db
User: root
Password: root
![image](https://github.com/user-attachments/assets/00787e46-7d29-4010-aedd-2cfffb99d887)

## Bài 4: Chạy ứng dụng Node.js với Docker Compose		
- Yêu cầu:	
- Chạy một ứng dụng Node.js đơn giản với Express.
- setup
![image](https://github.com/user-attachments/assets/a25fbaeb-7b0b-420c-a062-f8ee88ffde54)
- file Dokerfile
![image](https://github.com/user-attachments/assets/8407af84-9b51-4593-a73e-59e82c5b3fdc)
- file Docker-composefile
![image](https://github.com/user-attachments/assets/4e9a3ae9-01a8-454b-aa1a-ff65ce161118)
- build 
![image](https://github.com/user-attachments/assets/d0a73985-9b9e-4249-83e1-aad9d23a34c4)



