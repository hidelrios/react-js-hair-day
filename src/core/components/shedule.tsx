import { cva, type VariantProps } from "class-variance-authority";
import Text from "../../components/text";
import DateInput from "../../components/date-input";
import { Container } from "../../components/container";
import { TimeSelect } from "../../components/time-select";
import TextInput from "../../components/text-input";
import Button from "../../components/button";
const scheduleVariants = cva(
  `bg-gray-700 rounded-xl max-w-[498px] w-full flex flex-col gap-6 p-20`
)

interface ScheduleProps extends VariantProps<typeof scheduleVariants>, React.ComponentProps<"aside"> {

}

export default function Schedule({ className, ...props }: ScheduleProps) {
  return (
    <aside className={scheduleVariants()}>
      <Text as="h2" variant={"title-md"}>Agende um atendimento</Text>
      <Text as="p" variant={"text-sm"} className="text-gray-300">Selecione data, horário e informe o nome do cliente para criar o agendamento</Text>
      <Text as="h3" variant={"title-sm"}>Data</Text>
      <DateInput />
      <Container className="flex flex-col gap-4">
        <Text as="h3" variant={"title-sm"}>Horários</Text>
        <Text as="span" variant={"text-sm"} className="text-gray-300">Manhã</Text>
        <Container className="flex gap-2">
          <TimeSelect>09:00</TimeSelect>
          <TimeSelect>10:00</TimeSelect>
          <TimeSelect>11:00</TimeSelect>
          <TimeSelect>12:00</TimeSelect>
        </Container>
        <Text as="span" variant={"text-sm"} className="text-gray-300">Tarde</Text>
        <Container className="flex gap-2">
          <TimeSelect>13:00</TimeSelect>
          <TimeSelect>14:00</TimeSelect>
          <TimeSelect>15:00</TimeSelect>
          <TimeSelect>16:00</TimeSelect>
        </Container>
        <Text as="span" variant={"text-sm"} className="text-gray-300">Noite</Text>
        <Container className="flex gap-2">
          <TimeSelect>17:00</TimeSelect>
          <TimeSelect>18:00</TimeSelect>
          <TimeSelect>19:00</TimeSelect>
          <TimeSelect>20:00</TimeSelect>
        </Container>
        <Text as="h3" variant={"title-sm"}>Cliente</Text>
        <TextInput placeholder="Nome do cliente" />
        <Button className="w-full">AGENDAR</Button>
      </Container>




    </aside>
  );
}