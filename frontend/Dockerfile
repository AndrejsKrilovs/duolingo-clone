FROM node:24-alpine AS build
WORKDIR /app

# Кэшируем зависимости
COPY package*.json ./
RUN npm install

# Копируем остальной код и билдим
COPY . .
RUN npm run build

# Nginx для статики
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
