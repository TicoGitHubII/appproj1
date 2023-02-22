
# stage 1
FROM node:16.16

# set Directory
WORKDIR /app

COPY  package*.json angular.json tsconfig.json /app/

# install packages
RUN  npm install 

#copy the rest of the package 
COPY ./src /app/src

EXPOSE 4200
# COPY package.json package-lock.json ./

# Run the command start the app
CMD ["ng", "serve", "--host", "0.0.0.0"]