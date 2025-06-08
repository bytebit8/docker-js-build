FROM nginx:latest

WORKDIR /app

COPY dist .

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]