# From what image we are building from
FROM iron/node

# Create app directory
WORKDIR /app
ADD . /app

# Install dependencies
COPY /node_modules /app

ENTRYPOINT ["node", "getactive.js"]
