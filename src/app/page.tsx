import { TaskComponentParams } from "@/components/task";
import TaskListComponent, {
  TaskListComponentParams,
} from "@/components/taskList";

export default function HomePage() {
  const lists: TaskListComponentParams[] = [
    {
      id: "1",
      title: "Backlog",
      tasks: [
        { id: "1", title: "Task 1", done: false },
        { id: "2", title: "Task 2", done: false },
        { id: "3", title: "Task 3", done: false },
        { id: "4", title: "Task 4", done: false },
        { id: "5", title: "Task 5", done: false },
      ],
    },
  ];
  return (
    <main className="px-4">
      {lists.map((list) => (
        <TaskListComponent
          key={list.id}
          id={list.id}
          title={list.title}
          tasks={list.tasks}
        />
      ))}
    </main>
  );
}
