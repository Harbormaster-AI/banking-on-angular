FROM python:3.12-alpine

LABEL org.opencontainers.image.vendor="Harbormaster"
LABEL org.opencontainers.image.title="bankingOnAngular"
LABEL org.opencontainers.image.version="0.0.1"
LABEL com.harbormaster.blueprint="Angular-22"
LABEL com.harbormaster.model="Banking Industry Domain Model"
LABEL com.harbormaster.generated="2026-11-15"
#LABEL com.harbormaster.certification="2d709fd7-6869-4845-96e9-8c54be1a278b"

WORKDIR /app

COPY . .

EXPOSE 8080

CMD ["python3", "-m", "http.server", "8080", "--bind", "0.0.0.0", "--directory", "src"]