import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';

// Get all tasks
export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await prisma.task.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    
    return res.status(200).json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return res.status(500).json({ message: 'Error fetching tasks' });
  }
};

// Create a new task
export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, color } = req.body;
    
    if (!title) {
      return res.status(400).json({ message: 'Title is required' });
    }
    
    const task = await prisma.task.create({
      data: {
        title,
        color: color || 'gray',
        completed: false,
      },
    });
    
    return res.status(201).json(task);
  } catch (error) {
    console.error('Error creating task:', error);
    return res.status(500).json({ message: 'Error creating task' });
  }
};

// Update a task
export const updateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, color, completed } = req.body;
    
    const task = await prisma.task.findUnique({
      where: { id: Number(id) },
    });
    
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    
    const updatedTask = await prisma.task.update({
      where: { id: Number(id) },
      data: {
        title: title !== undefined ? title : task.title,
        color: color !== undefined ? color : task.color,
        completed: completed !== undefined ? completed : task.completed,
      },
    });
    
    return res.status(200).json(updatedTask);
  } catch (error) {
    console.error('Error updating task:', error);
    return res.status(500).json({ message: 'Error updating task' });
  }
};

// Delete a task
export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    const task = await prisma.task.findUnique({
      where: { id: Number(id) },
    });
    
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    
    await prisma.task.delete({
      where: { id: Number(id) },
    });
    
    return res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error('Error deleting task:', error);
    return res.status(500).json({ message: 'Error deleting task' });
  }
}; 