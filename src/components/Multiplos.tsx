
import type { NumberType } from "../types"
import { NumbersItem } from "./NumbersItem"

export const Multiplos = ({multiplos} : {multiplos: NumberType[]}) => {
  return (
    <div className="flex justify-center items-center gap-2  flex-wrap">
    {multiplos.length !==0 &&(
        multiplos.map((n : NumberType) => (
            <NumbersItem 
                key={Number(n.number)}
                {...n}

                 />

        ))
    )}
    </div>
  )
}
