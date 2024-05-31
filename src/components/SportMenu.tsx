import { GiMeditation } from "react-icons/gi";
import { BiSwim, BiCycling } from "react-icons/bi";
import { LuDumbbell } from "react-icons/lu";


const SportMenu = () => {
    return (
        <ul className="bg-black px-4 flex flex-col w-fit h-full gap-4 items-center justify-center absolute left-0">
            <li className="sport-icon"><GiMeditation size={30}/></li>
            <li className="sport-icon"><BiSwim size={30}/></li>
            <li className="sport-icon"><BiCycling size={30}/></li>
            <li className="sport-icon"><LuDumbbell size={30}/></li>
        </ul>
    )
}

export default SportMenu;