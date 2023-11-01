# Fetching the latest node image on alpine linux
FROM node:18-alpine

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /cc-react-admin-ui/

# Installing dependencies
COPY public/ /rcc-react-admin-ui/public
COPY src/ /cc-react-admin-ui/src
COPY package.json /cc-react-admin-ui/

# Runs npm install to create node_modules for your app
RUN npm install

# Copying all the files in our project
COPY . .

# Exposes the port to access the app from outside the container i.e from the browser
EXPOSE 5173

# Starting our application
# CMD ["npm", "start"]
CMD ["npm", "run", "dev"]