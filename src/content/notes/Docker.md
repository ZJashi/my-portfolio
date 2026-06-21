---
title: "Docker"
date: "2026-06-20"
tags: ['CS']
description: "What is Docker and how it works? Container vs Image. List of useful commands."
---

# What is Docker? 

Docker is a tool that lets you package, ship, and run applications in containers. A container is an isolated environment that contains:
- My application
- Its dependencies (libraries, runtime, etc.)
- Its configuration
For example, if your FastAPI app needs Python 3.12 and certain packages, Docker bundles everything together so the app runs the same way on:
my laptop, a teammate's computer, a server, the cloud

Without Docker everyone must install and configure manually. With Docker, there is a single container containing
- FastAPI App
- Python 3.12
- Dependencies

Then we simply run this container anywhere the Docker is installed. In short, Docker is a platform
for creating and running containers, which are lightweight, isolated environments that package
an application and everything it needs to run. 

---
# Image vs Container

## What is a a Docker Image? 

Docker image is a bluepring or a template needed for an application. An image contains
```
FastAPI-image
- FastAPI App
- Python 3.12
- Configuration Files
- Libraries
```
Image is **not running**. It defines
- What software should exist
- Which dependencies should be installed
- How the application should start

Images are created using:
```
docker build -t fastapi-image 
```

Here:

- `docker build` = builds a Docker image
- `-t` = assigns a tag (name) to the image
- `fastapi-image` = the image name/tag
- `.` = use the current directory as the build context (where Docker looks for the Dockerfile and application files)

After running this command, you can refer to the image by name:

`docker run fastapi-image`

---

## What is a Docker container?

A Docker container is a **running instance** of an image. When Docker starts an image:
`docker run fastapi-image`
it creates a container: 

```
Container 1:
- FastAPI app
- Python 3.12
- Dependencies
```

## One Image can creat multiple containers

Suppose we have `fastapi-image`

Docker allows:
```
fastapi-image
 - Container A
 - Container B
 - Container C
```
All three containers run the same application, but they are independent.

### Why Create Multiple Containers From One Image?

1. A single FastAPI instance may not handle enough traffic.
    ```
    fastapi-image
    - Container A
    - Container B
    - Container C
    ```
    A load balancer distributes requests across them. This is how Kubernetes scales applications.

2. Fault Tolerance 

   If one container crashes:

   * Container A → Running
   * Container B → Crashed
   * Container C → Running

   The service remains available.

3. Different Configurations
    - Container A → Development
    - Container B → Staging
    - Container C → Production

The application code is identical, but configuration differs.

---

# One process per container

"One process per container" is a Docker best practice, not a strict requirement. An image usually packages a single service (e.g., a FastAPI application), and that image can be used to create many containers running the same service:

```
fastapi-image
 - Container A
 - Container B
 - Container C
```
This is commonly done for:

* Scaling
* Load balancing
* Fault tolerance

Different services are usually packaged into different images and run in different containers. For example:

* Container 1 → React Frontend
* Container 2 → FastAPI Backend
* Container 3 → PostgreSQL Database

Each container runs a different service, and the containers communicate over a network while remaining isolated from one another.

---

## What About Databases?

This is one of the most important concepts in Docker.

Consider PostgreSQL:

`postgres-image -> postgres-container`

What is in the Image?
```
postgres-image
1. PostgreSQL software
2. Default configuration
3. Startup instructions
```

**The image does not contain your actual database records.**

What is in the Container?

```
postgres-container
1. Running PostgreSQL process
2. Database files (while running)
```

If data exists only inside the container and the container is removed:

`docker rm postgres-container`

the database data is lost. To persist data, Docker uses **volumes**.