# Hello Docker

This is a simple hello world express web app that was built to demonstrate
building, testing, and deploying a NodeJS app using Docker.

Building the hello-docker image

```
# docker build -t hello-docker .
```

Run the hello-docker image

```
# docker run -p 3000:3000 -d --name hello-docker hello-docker
```
