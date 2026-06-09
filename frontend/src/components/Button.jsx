export function Button({label ,onClick}){
    return(
        <button onClick={onClick} className="w-full bg-slate-900 rounded-md py-2 text-white mt-4 font-medium">{label}</button>
    )
}