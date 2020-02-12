let todoList = [];

export default async () => {
  for (let i = 0; i <= 10; i++) {
    todoList.push({ id: i, name: `Todo No ${i}`, isCompleted: false });
  }
  return todoList;
};
