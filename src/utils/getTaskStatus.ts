import { TaskModel } from '../models/TaskModel';

export function getTaskStatus(task: TaskModel, activeTask: TaskModel | null) {
  if (task.completedDate) return 'Completa';
  if (task.interruptDate) return 'Interrompida';
  if (task.id === activeTask?.id) return 'Completa';
  return 'Abandonada';
}
