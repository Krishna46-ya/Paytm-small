export function Inputbox({label, placeholder, onChange}){
    return(
        <div>
            <div className="py-2 text-left text-sm font-medium">{label}</div>
            <input onChange={onChange} className="w-full border rounded px-2 py-1 border-slate-200" type="text" placeholder={placeholder}></input>
        </div>
    )
}