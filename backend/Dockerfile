FROM gradle:8.8.0-jdk21-alpine AS build
WORKDIR /app

# Кэшируем зависимости
COPY build.gradle ./
RUN gradle dependencies --no-daemon || return 0

# Копируем остальное и собираем
COPY . .
RUN gradle clean bootJar --no-daemon

FROM eclipse-temurin:21-jre
WORKDIR /app
COPY --from=build /app/build/libs/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]