# Movie Project

Um aplicativo full-stack para gerenciar e avaliar filmes, desenvolvido com Spring Boot no backend e React no frontend.

## 📋 Sobre o Projeto

Movie Project é uma aplicação web que permite aos usuários:
- Visualizar uma lista de filmes com paginação
- Avaliar filmes com notas
- Visualizar a pontuação média dos filmes
- Gerenciar avaliações de filmes

## 🏗️ Arquitetura

O projeto é dividido em duas partes principais:

### Backend
- **Framework**: Spring Boot 4.0.2
- **Linguagem**: Java 17
- **Banco de Dados**: H2 (desenvolvimento) / PostgreSQL (produção)
- **Autenticação**: Spring Security
- **ORM**: Spring Data JPA

### Frontend
- **Framework**: React 19.2
- **Linguagem**: TypeScript
- **Bundler**: Vite 7.2
- **Roteamento**: React Router 7.13
- **HTTP Client**: Axios 1.13
- **UI**: Bootstrap 5.3
- **Linter**: ESLint 9.39

## 📁 Estrutura do Projeto

```
movie_project/
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/orodrigorezende/movie_project/
│   │   │   │   ├── config/           # Configurações (Segurança, etc)
│   │   │   │   ├── controllers/      # API REST Controllers
│   │   │   │   ├── dto/              # Data Transfer Objects
│   │   │   │   ├── entities/         # Entidades JPA
│   │   │   │   ├── repositories/     # Spring Data Repositories
│   │   │   │   └── services/         # Lógica de negócio
│   │   │   └── resources/            # Configurações de aplicação
│   │   └── test/
│   ├── pom.xml
│   ├── create.sql                    # Script de criação do banco
│   └── Dockerfile
└── frontend/
    ├── src/
    │   ├── components/               # Componentes reutilizáveis
    │   │   ├── FormCard/
    │   │   ├── MovieCard/
    │   │   ├── MovieScore/
    │   │   ├── MovieStars/
    │   │   ├── navbar/
    │   │   └── Pagination/
    │   ├── pages/                    # Páginas da aplicação
    │   │   ├── Form/                 # Formulário de avaliação
    │   │   └── Listing/              # Lista de filmes
    │   ├── types/                    # Tipos TypeScript
    │   ├── utils/                    # Funções utilitárias
    │   ├── App.tsx
    │   └── main.tsx
    ├── package.json
    ├── vite.config.ts
    └── tsconfig.json
```

## 🗄️ Modelo de Dados

### Entidades Principais

**Movie**
- `id`: Long (PK)
- `title`: String
- `score`: Double (pontuação média)
- `count`: Integer (número de avaliações)
- `image`: String (URL da imagem)
- `scores`: Set<Score> (relacionamento 1:N)

**Score**
- `id`: ScorePK (chave primária composta)
  - `movie`: Movie
  - `user`: User
- `valor`: Double (nota da avaliação)

**User**
- Entidade para rastrear usuários que avaliam filmes

## 🚀 Getting Started

### Pré-requisitos

- Java 17+
- Node.js 18+
- Maven (incluso com o projeto)
- PostgreSQL (para produção) ou H2 (para desenvolvimento)

### Backend

1. **Instalar dependências e compilar**
   ```bash
   cd backend
   ./mvnw clean install
   ```

2. **Executar a aplicação**
   ```bash
   ./mvnw spring-boot:run
   ```

   Ou em ambiente específico:
   ```bash
   ./mvnw spring-boot:run -Dspring-boot.run.arguments="--spring.profiles.active=dev"
   ```

3. **Console H2** (desenvolvimento)
   - Acesse: http://localhost:8080/h2-console
   - JDBC URL: `jdbc:h2:mem:testdb`

### Frontend

1. **Instalar dependências**
   ```bash
   cd frontend
   npm install
   ```

2. **Executar em desenvolvimento**
   ```bash
   npm run dev
   ```

   A aplicação estará disponível em: http://localhost:5173

3. **Build para produção**
   ```bash
   npm run build
   ```

4. **Lint do código**
   ```bash
   npm run lint
   ```

## 📡 API REST

### Endpoints de Filmes

**GET /movies**
- Retorna lista paginada de filmes
- Parâmetros: `page`, `size`, `sort`
- Resposta: `Page<MovieDTO>`

**GET /movies/{id}**
- Retorna detalhes de um filme específico
- Parâmetros: `id` (Long)
- Resposta: `MovieDTO`

### Endpoints de Avaliações

**POST /scores**
- Avalia um filme
- Body: `ScoreDTO`

**GET /scores**
- Retorna avaliações paginadas

## 🔐 Segurança

- Spring Security está configurado em [SecurityConfig.java](backend/src/main/java/com/orodrigorezende/movie_project/config/SecurityConfig.java)
- Autenticação e autorização protegem os endpoints

## 📝 Configurações

### Perfis de Ambiente

- **dev**: Desenvolvimento com H2
- **prod**: Produção com PostgreSQL
- **test**: Testes

Arquivos de configuração:
- [application.properties](backend/src/main/resources/application.properties)
- [application-dev.properties](backend/src/main/resources/application-dev.properties)
- [application-prod.properties](backend/src/main/resources/application-prod.properties)
- [application-test.properties](backend/src/main/resources/application-test.properties)

## 🧪 Testes

### Backend
```bash
cd backend
./mvnw test
```

### Frontend
```bash
cd frontend
npm test
```

## 📦 Build e Deploy

### Docker

```bash
docker build -t movie-project:latest -f backend/Dockerfile .
docker run -p 8080:8080 movie-project:latest
```

### Deploy no Frontend

O arquivo [_redirects](frontend/public/_redirects) está configurado para deploy em plataformas como Netlify.

## 🛠️ Tecnologias Utilizadas

### Backend
- Spring Boot 4.0.2
- Spring Security
- Spring Data JPA
- H2 Database
- PostgreSQL
- Jakarta Persistence

### Frontend
- React 19.2
- TypeScript 5.9
- Vite 7.2
- Bootstrap 5.3
- Axios 1.13
- React Router 7.13
- ESLint 9.39

## 👤 Autor

Rodrigo Rezende

---

**Última atualização**: 7 de fevereiro de 2026
