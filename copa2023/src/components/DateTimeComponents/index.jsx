/* eslint-disable react/prop-types */
import { Date, Day, Hour } from "./style";

function DateTimeComponents({ jogo }) {
  return (
    <h3>
      <Day>{jogo.dia}</Day>
      <Date>{jogo.data}</Date>
      <Hour>{jogo.hora}</Hour>
    </h3>
  );
}

export default DateTimeComponents;
