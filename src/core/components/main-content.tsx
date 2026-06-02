import Button from "../../components/button";

export default function MainContent() {
  return (
    <div className="bg-gray-800 text-gray-100">
      <h1>Main Page</h1>
      <Button handling={true}>AGENDAR</Button>
      <Button disabled={true}>AGENDAR</Button>

    </div>
  );
}