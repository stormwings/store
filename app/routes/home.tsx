export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

import { TaskList } from "./../components/smart/tasklist/tasklist";

export default function Home() {
  return <TaskList />;
}
