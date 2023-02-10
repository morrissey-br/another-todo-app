export default function HomePage() {
  return (
    <main className="px-4">
      <h2 className="text-2xl font-mono">Backlog</h2>
      <ul className="p-4">
        <li className="flex justify-between">
          Task 1 <input type="checkbox" />
        </li>
        <li>Task 2</li>
        <li>Task 3</li>
        <li>Task 4</li>
      </ul>
    </main>
  );
}
