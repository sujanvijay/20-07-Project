FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build frontend
RUN npm run build

# Install static server
RUN npm install -g serve

EXPOSE 8080
CMD ["serve", "-s", "dist", "-l", "8080"]
