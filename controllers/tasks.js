// importar modelo

export const getAllTasks = (req, res) => {
  const tasks = TaskModel.getAllTasks()
  res.json(tasks)
}

export const addTask = (req, res) => {
  const task = // ????
  res.json(task)
}

export const deleteTask = (req, res) => {
  // ????
  res.json({ message: 'Deleted successfully' })
}
