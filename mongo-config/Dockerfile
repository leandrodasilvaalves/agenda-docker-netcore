FROM mongo
COPY init.json /scripts/init.json
CMD mongoimport --host db --db agenda-docker-netcore --collection contatos --file /scripts/init.json --jsonArray