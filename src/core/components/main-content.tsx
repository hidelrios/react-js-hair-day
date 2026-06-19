import Button from "../../components/button";
import Card from "../../components/card";
import DateInput from "../../components/date-input";
import TextInput from "../../components/text-input";
import { TimeSelect } from "../../components/time-select";
import Schedule from "./shedule";

export default function MainContent() {
  return (
    <div className="relative p-3 flex gap-3 flex-col md:flex-row max-w-360 mx-auto">
      <Schedule />
    </div>
  );
}