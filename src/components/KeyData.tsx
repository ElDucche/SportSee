import { HiMiniFire } from "react-icons/hi2";
import Poulet from "./icones/Poulet";
import Pomme from "./icones/Pomme";
import Burger from "./icones/Burger";
const KeyData = ({type, amount}: {type:string, amount:number|unknown}) => {
    const icone = (type: string) => {
        switch(type) {
            case "calorieCount":
                return <HiMiniFire className="data-icone bg-primary/10  text-primary"/>
            case "proteinCount":
                return <Poulet className="data-icone bg-[#4AB8FF]/10"/>
            case "carbohydrateCount":
                return <Pomme className="data-icone bg-[#FDCC0C]/10"/>
            case "lipidCount":
                return <Burger className="data-icone bg-[#FD5181]/10"/>
            default:
                return <i></i>
        }
    }
    const category = (type: string) => {
        switch(type) {
            case "calorieCount":
                return 'Calories'
            case "proteinCount":
                return "Proteines"
            case "carbohydrateCount":
                return "Glucides"
            case "lipidCount":
                return "Lipides"
            default:
                return <i></i>
        }
    }
    return (
        <div className="flex gap-4 p-4  bg-tertiary items-center w-64 h-32 rounded-lg ">
            {icone(type)}
            <div className="grid gap-1 p-2">
                <span className="font-semibold text-2xl">{String(amount)}{type === "calorieCount" ? 'kCal' : 'g' }</span>
                <p className="text-secondary/50 font-medium">{category(type)}</p>
            </div>
        </div>
    )
}
export default KeyData;