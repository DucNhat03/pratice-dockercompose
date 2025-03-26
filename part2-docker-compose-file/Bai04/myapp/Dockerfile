# Sử dụng image Node.js mới nhất
FROM node:18

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Copy file package.json vào container và cài đặt dependencies
COPY package.json ./
RUN npm install

# Copy toàn bộ mã nguồn vào container
COPY . .

# Expose cổng 3000 để có thể truy cập từ bên ngoài
EXPOSE 3000

# Chạy ứng dụng
CMD ["npm", "start"]
