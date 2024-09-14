# 📁 Text File Management API

Manage text files with timestamps using this Node.js application built with Express.

## 🚀 Overview

This application provides endpoints to create text files with current timestamps and retrieve a list of all existing text files stored in the `TimeStamp` directory.

## 🔗 Endpoints

### Root

- **GET `/`**
  - Provides information about available endpoints.
  - **Example response:**
    ```json
    {
        "End point to create a text file": "/createfile",
        "End point to retrieve all text files": "/showfiles"
    }
    ```

### Create Text File

- **GET `/createfile`**
  - Creates a text file in the `TimeStamp` folder with the current timestamp as the filename.
  - **Example response:**
    ```json
    {
        "msg": "Text file added",
        "fileContent": "dd-MM-yyyy-HH-mm-ss",
        "fileName": "dd-MM-yyyy-HH-mm-ss"
    }
    ```

### Show All Text Files

- **GET `/showfiles`**
  - Retrieves a list of all text file names from the `TimeStamp` folder.
  - **Example response:**
    ```json
    [
        "dd-MM-yyyy-HH-mm-ss.txt",
        "dd-MM-yyyy-HH-mm-ss.txt",
        "dd-MM-yyyy-HH-mm-ss.txt"
    ]
    ```

## 📝 Postman Documentation

Explore and test the endpoints using [Postman](https://documenter.getpostman.com/view/16859357/2sAXqp7iCP).

