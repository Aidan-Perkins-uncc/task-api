import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks(option) {
  return taskRepository.findAll(option);
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}
