FROM nginx:alpine

WORKDIR /usr/share/nginx/html


COPY dist/agenda-docker .
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80