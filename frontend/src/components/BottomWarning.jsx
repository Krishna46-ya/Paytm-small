import { Link } from "react-router-dom";


export function BottomWarning({label ,to , buttonText}){
    return(
        <div className="flex justify-center py-2 text-sm font-medium">
            <div>
                {label}  
            </div>
            <Link className="pl-1 underline cursor-pointer" to={to}>
                {buttonText}
            </Link>
            
        </div>
    )
}