# Stage 1: Build the application
FROM maven:3.8.4-openjdk-8 as build

# Set the working directory in the Docker image
WORKDIR /app

# Copy the source code into the container
COPY . .

# Build the application
RUN mvn package -DskipTests

# Stage 2: Run the application
FROM openjdk:8-jdk

# Set the working directory in the Docker image
WORKDIR /app

# Copy the built JAR file from the build stage
COPY --from=build /app/target/*.jar app.jar

# Expose the port the app runs on
EXPOSE 8080

# Run the jar file
ENTRYPOINT ["java", "-jar", "app.jar"]
