# flash-cards_server
Server version to flash-cards project

## Table of contents
* [Run Locally](#run-locally)
* [Tech Stack](#tech-stack)
* [Live](#live)
* [API Reference](#api-reference)

## Run Locally

Clone the project

```bash
  git clone https://github.com/Reckit075/flash-cards_server.git
```

Go to the project directory

```bash
  cd flash-cards_server
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

## Tech Stack

- cors v 2.8.5
- express v 4.17.1
- mongoose v 5.9.20
- nodemailer: v 6.4.10,
- jsonwebtoken: v 8.5.1,
- nodemon v 2.0.4
- dotenv: v 10.0.0,

## Live
https://flash-cards-server2.herokuapp.com

## API Reference

#### Get flashCards by type

```http
  GET
```
```bash
/flashCards/getByType
```

#### Create flashCard

```https
  Post
```
```bash
/flashCards/createOne
```
| Body | Type     | Description     |
| :-------- | :------- | :------------- |
| `language` | `string` | **Required**.  |
| `difficult` | `string` | **Required**.  |
| `question` | `string` | **Required**.  |
| `answear` | `string` | **Required**.  |


#### Create flashCard difficult type

```http
  Post
```
```bash
  /flashCards/type/difficult
```
| Body | Type     | Description     |
| :-------- | :------- | :------------- |
| `difficult` | `string` | **Required**.  |

#### Create flashCard language type

```http
  Post
```
```bash
  /flashCards/type/language
```
| Body | Type     | Description     |
| :-------- | :------- | :------------- |
| `language` | `string` | **Required**.  |

#### Login user

```http
  Post
```
```bash
  /users/login
```

### Get one user

```http
  GET
```
```bash
  /users/one/:id
```

### Get all users

```http
  GET
```
```bash
  /users/all
```

### Check user is admin

```http
  POST
```
```bash
  /users/checkIsadmin
```

IN PROGRESS

### Register user step 1 (after this step server send email to user)

```http
  POST
```
```bash
  /users/register
```

| Body | Type     | Description     |
| :-------- | :------- | :------------- |
| `username` | `string` | **Required**.  |
| `password` | `string` | **Required**.  |
| `email` | `string` | **Required**.  |

### Register user step 2 (in this endpoint user type code gain in email to complete registration)

```http
  POST
```
```bash
  /users/code
```

| Body | Type     | Description     |
| :-------- | :------- | :------------- |
| `code` | `string` | **Required**.  |

