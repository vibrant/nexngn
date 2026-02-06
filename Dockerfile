FROM nginx:alpine
COPY index.html /usr/share/nginx/html/
COPY engine-assets /usr/share/nginx/html/engine-assets/
COPY favicon.ico /usr/share/nginx/html/
COPY apple-touch-icon.png /usr/share/nginx/html/
EXPOSE 80
