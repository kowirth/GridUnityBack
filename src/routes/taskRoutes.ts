import express from 'express';
import { 
  getAllTasks, 
  createTask, 
  updateTask, 
  deleteTask 
} from '../controllers/taskController';

const router = express.Router();

// GET /tasks - Get all tasks
router.get('/', getAllTasks);

// POST /tasks - Create a new task
router.post('/', createTask);

// PUT /tasks/:id - Update a task
router.put('/:id', updateTask);

// DELETE /tasks/:id - Delete a task
router.delete('/:id', deleteTask);

export default router; 