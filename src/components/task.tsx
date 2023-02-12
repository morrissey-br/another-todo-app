export interface TaskComponentParams {
  id: string;
  title: string;
  done: boolean;
}

export default function TaskComponent(params: TaskComponentParams) {
  return (
    <li className="flex justify-between py-2 border-b">
      {params.title}
      <input type="checkbox" />
    </li>
  );
}
