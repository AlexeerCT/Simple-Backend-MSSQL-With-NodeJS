# Sign Up & Log In app - React, NodeJS and SQL Server

__If it works for you, give me a star! ⭐__

## SQL User Table Model(Script in .\BackEnd\scripts\)

```
  NUMCONTROL int(50) NOT NULL
  NOMBRE varchar(255) NOT NULL
  APELLIDOP varchar(255) NOT NULL
  APELLIDOM varchar(255)
  CURP varchar(100) NOT NULL
  FECHANAC datetime
  GRADO varchar(255) NOT NULL
  GRUPO varchar(255) NOT NULL
  ESPECIALIDAD varchar(255) NOT NULL
  PRIMARY KEY (NUMCONTROL)

```

## .env file variables
All String variables goes without "" or ''.
```
DB_USER=<string>
DB_PASSWORD=<string>
DB_NAME=<string>
DB_USERNAME_TABLE=<string>
DB_SERVER=localhost
```

## Technologies used

- React
- SQL Server w/mssql package
- NodeJS
- ExpressJS
- Swagger
- Babel
- dotenv

## Install

```bash

cd .\BackEnd\
# Package Installation
npm install

# Build with babel
npm run build

# Start 
npm start





