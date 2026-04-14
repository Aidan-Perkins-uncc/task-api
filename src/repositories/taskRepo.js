import prisma from '../config/db.js';

export async function findAll({completed}) {
  const isComplete = {};

  if (completed === 'true') {
    isComplete.completed = true;
  } else if (completed === 'false') {
    isComplete.completed = false;
  }
  const tasks = await prisma.task.findMany({ where: isComplete })
  return tasks;

}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}
