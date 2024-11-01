type NumberType = {
  key: number;
  number: Number;
  color: string;
  multiplo: number;
}

export const NumbersItem = ({number, color, multiplo} : NumberType) => {
  const colorClass : String = color==='transparent' ? '' :`bg-${color}-300`;
  return (
    <div
      className={` ${colorClass} w-20 m-5 text-center text-2xl font-bold text-nowrap p-3 rounded-lg`}
      >{number.toString()}</div>
  )
}
