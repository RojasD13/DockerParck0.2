FROM node:latest

# Instalar Prometheus
RUN apt-get update && \
    apt-get install -y prometheus-node-exporter

# Establecer el directorio de trabajo
WORKDIR /api

# Copiar el código fuente de la aplicación
COPY . .

# Instalar las dependencias de la aplicación
RUN npm install

# Exponer los puertos 8000 (puerto de la aplicación) y 9090 (puerto de Prometheus)
EXPOSE 8000
EXPOSE 9100

# Copiar el script de inicio personalizado
COPY start.sh .

# Establecer permisos de ejecución para el script de inicio
RUN chmod +x start.sh

# Ejecutar el script de inicio al iniciar el contenedor
CMD ["./start.sh"]
