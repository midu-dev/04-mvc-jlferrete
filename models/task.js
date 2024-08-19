/**
 * Array to store tasks.
 * @type {Array<Object>}
 */

/** 
 * He tenido que investigar como lo resolvieron otros compañeros
 * Dejando el const, fallaban los tests y supongo que es
 * por el ambito de las funciones. Pero me genera dudas.
*/ 

let tasks = []

/**
 * ID for the next task. Increments each time a new task is added.
 * @type {number}
 */
let currentId = 1

/**
 * Model class representing a task.
 * @class
 */
export class TaskModel {
  /**
   * Fetches all tasks.
   * @name TaskModel.getAllTasks
   * @static
   * @returns {Array<Object>} Array of tasks.
   */

  /** 
   * Otros compañeros han usado async para esto
   * Entiendo que no es necesario en este caso, al igual que el delete
   * Pero te agredecería que me corrigieras si estoy equivocado 
   */ 
  static getAllTasks () {
    return tasks
  }

  /**
   * Adds a new task to the list.
   * @name TaskModel.addTask
   * @static
   * @param {string} description - The description of the task.
   * @returns {Object} The new task object.
   */
  static async addTask (description = '') {
    if (!description) {
      return {}
    }

    const task = {
      id: currentId,
      description
    }

    currentId++

    tasks.push(task)

    return task
  }

  /**
   * Deletes a task from the list by its ID.
   * @name TaskModel.deleteTask
   * @static
   * @param {number} id - The ID of the task to delete.
   */
  static async deleteTask (id = 0) {
    const removeTask = tasks.filter((task) => task.id !== Number(id))
    tasks = removeTask
    return tasks
  }
}