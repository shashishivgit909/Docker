# this will pull base image "node" whose version is "lts-alpine3.19" while biulding image.
FROM node:lts-alpine3.19

# this cpoy all code of folder in which this docker file exits into image  
COPY . .   
# this install all dependencies in image and make nodemodules necessary for those dependencies if not  keep node_modules in ".dockerignore"
RUN npm install 
# this is specifying that this image will run server on port no: 5000 ( same port no as mentioned in index.js file) 
EXPOSE 5000
CMD ["node","index.js"] 
#  this line will run node index.js comnad during runniing of conatainer.
