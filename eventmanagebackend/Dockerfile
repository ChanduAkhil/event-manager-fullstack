# Stage 1: Build the JAR
FROM maven:3.8.5-openjdk-17 AS build
WORKDIR /app
COPY . .
# Skip tests to speed up the build
RUN mvn clean package -DskipTests

# Stage 2: Run the App
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8082
ENTRYPOINT ["java", "-jar", "app.jar"]