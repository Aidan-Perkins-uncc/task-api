import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  const {completed} = req.query

  const option = {
    completed,
  };
  
  const tasks = await taskService.getAllTasks(option);
  res.json(tasks);
}

export async function createTask(req, res, next) {
  const { title, completed } = req.body;
  const task = await taskService.createTask({ title, completed });
  res.status(201).json(task);
}
