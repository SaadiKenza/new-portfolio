import{ReactNode} from "react"

type CVEntry={
    title:string
    employer:string
    children:ReactNode
}
export default function CVEntry(propos:CVEntry){
    return(
        <div className="p-4 border border-slate-200 rounded-xl shadow-sm mx-4 my-8">
            <div className="flew items-center justify-between">
                <h3 className="text-xl font-bold text-sky-800">Etudiante</h3>
                <h4 className="mb.2 italic text-slate-500">ECAM</h4>
            </div>
            (props.childern)
        </div>
    )
}