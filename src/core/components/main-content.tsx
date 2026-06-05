import Button from "../../components/button";
import TextInput from "../../components/text-input";

export default function MainContent() {
  return (
    <div className="bg-gray-800 text-gray-100">
      <h1>Main Page</h1>
      <Button handling={true}>AGENDAR</Button>
      <br />
      <Button disabled={true}>AGENDAR</Button>
      <br />
      <TextInput placeholder="Digite seu nome" />

    </div>
  );
}