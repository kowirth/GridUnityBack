# Todo List Backend API

This is the backend API for the Todo List app, built with Express.js, TypeScript, and Prisma.

## Features

- RESTful API for CRUD operations on tasks
- SQLite database for easy development
- Prisma ORM for database access
- TypeScript for type safety

## Getting Started

1. Make sure you have Node.js v22.13.0 installed:
   ```bash
   nvm use 22.13.0
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the database:
   ```bash
   npm run prisma:generate
   npm run prisma:migrate
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. The API will be available at http://localhost:5000

## API Endpoints

- `GET /tasks` - Get all tasks
- `POST /tasks` - Create a new task
- `PUT /tasks/:id` - Update a task
- `DELETE /tasks/:id` - Delete a task

## Project Structure

- `prisma/` - Database schema and migrations
- `src/controllers/` - API controllers
- `src/routes/` - API routes
- `src/index.ts` - Main entry point

## Database

The project uses SQLite for development, which creates a local file-based database at `prisma/dev.db`.

## Working with the Database

### View the Database with Prisma Studio

Prisma Studio provides a GUI for interacting with your database:

```bash
npx prisma studio
```

This will open a browser window at http://localhost:5555 where you can view and edit your data.

### Common Prisma Commands

```bash
# Create a new migration
npx prisma migrate dev --name <migration-name>

# Reset the database (delete all data)
npx prisma migrate reset

# Apply migrations to the database
npx prisma migrate deploy

# Generate Prisma client
npx prisma generate
```

## API Call Examples (Postman)

### Get All Tasks

- **Method**: GET
- **URL**: http://localhost:5000/tasks
- **Headers**: None required

### Create a Task

- **Method**: POST
- **URL**: http://localhost:5000/tasks
- **Headers**: 
  - Content-Type: application/json
- **Body**:
  ```json
  {
    "title": "Complete project",
    "color": "blue"
  }
  ```

### Update a Task

- **Method**: PUT
- **URL**: http://localhost:5000/tasks/1 (where 1 is the task ID)
- **Headers**: 
  - Content-Type: application/json
- **Body**:
  ```json
  {
    "title": "Updated task title",
    "color": "green",
    "completed": true
  }
  ```
  Note: You can update any single field or combination of fields.

### Toggle Task Completion

- **Method**: PUT
- **URL**: http://localhost:5000/tasks/1 (where 1 is the task ID)
- **Headers**: 
  - Content-Type: application/json
- **Body**:
  ```json
  {
    "completed": true
  }
  ```

### Delete a Task

- **Method**: DELETE
- **URL**: http://localhost:5000/tasks/1 (where 1 is the task ID)
- **Headers**: None required
- **Body**: None required 