# My Expense Manager

## Overview

My Expense Manager is a Node.js application designed to help users manage their expenses. It provides functionalities for user registration, login, adding expenses, and viewing past expenses. The application uses MySQL for database management and includes user authentication and authorization.

## Project Setup

### Prerequisites

- **Node.js** (v14 or later): [Download Node.js](https://nodejs.org/)
- **MySQL** (v5.7 or later): [Download MySQL](https://www.mysql.com/)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/my-expense-manager.git
   cd my-expense-manager

#### installation
npm install

#### .env
Create a .env file in the root directory of the project with the following content:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=expensesdb
PORT=4700

Replace yourpassword with your MySQL root password.

##### Create and Populate the Database:

##### Synchronize Database Schema:
node syncDatabase.js
Run the following script to create tables based on your Sequelize models:

#### startserver
node server.js
