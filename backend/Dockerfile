# imagem base com Java
FROM eclipse-temurin:21-jdk

# diretório de trabalho dentro do container
WORKDIR /app

# copia tudo
COPY . .

# build do projeto
RUN ./mvnw clean package -DskipTests

# expõe a porta usada pelo Spring
EXPOSE 8080

# comando para iniciar a aplicação
CMD ["java", "-jar", "target/movie_project-0.0.1-SNAPSHOT.jar"]