# Use a imagem oficial do PostgreSQL
FROM postgres:16

# Define variáveis de ambiente básicas (podem ser sobrescritas no docker-compose ou na linha de comando)
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres
ENV POSTGRES_DB=meubanco

# Exponha a porta padrão do PostgreSQL
EXPOSE 5432
