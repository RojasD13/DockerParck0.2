#!/bin/bash

# Iniciar tu aplicación Node.js
npm start &

# Iniciar Node Exporter
nohup /usr/bin/prometheus-node-exporter &

# Esperar indefinidamente
tail -f /dev/null
