import Another from "./components/Another";
import Card from "./components/Card";

export default function App() {

  return  (
    <div>
      <Card title="my title 1" content = "content 1" />
      <Card title="my title 2" content = "content 2" />
      <Another />
    </div>
  )
}
