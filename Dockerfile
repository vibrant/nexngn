FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --no-audit --no-fund
COPY . .
RUN npm run build

FROM nginx:1.27-alpine
RUN apk add --no-cache curl
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s CMD curl -fsS http://localhost/ -o /dev/null || exit 1
