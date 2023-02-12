import TaskComponent, { TaskComponentParams } from "./task";

export interface TaskListComponentParams {
  id: string;
  title: string;
  tasks: TaskComponentParams[];
}

export default function TaskListComponent(params: TaskListComponentParams) {
  return (
    <div>
      <h2 className="text-2xl font-mono">Backlog</h2>
      <ul className="p-4">
        {params.tasks.map((task) => (
          <TaskComponent
            key={task.id}
            id={task.id}
            title={task.title}
            done={task.done}
          />
        ))}
      </ul>
    </div>
  );
}
