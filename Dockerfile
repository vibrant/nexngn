FROM nginx:alpine
COPY index.html /usr/share/nginx/html/
COPY engine-assets /usr/share/nginx/html/engine-assets/
EXPOSE 80
