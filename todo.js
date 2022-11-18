/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable no-undef */
const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    return all.filter(
      (todo) => todo.dueDate < new Date().toLocaleDateString('en-CA'),
    );
  };

  const dueToday = () => {
    return all.filter(
      (todo) => todo.dueDate === new Date().toLocaleDateString('en-CA'),
    );
  };

  const dueLater = () => {
    return all.filter(
      (todo) => todo.dueDate > new Date().toLocaleDateString('en-CA'),
    );
  };
  const toDisplayableList = (list) => {
    return list
      .map(
        (todo) => `${todo.completed ? '[x]' : '[ ]'} ${todo.title} ${todo.dueDate === today ? '' : todo.dueDate}`,
      )
      .join('\n');
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
  };
};

module.exports = todoList;
