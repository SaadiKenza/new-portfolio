import { ReactNode } from "react"

type ProjectsEntryProps = {
    title: string
    employer: string
    children: ReactNode
}

export default function ProjectsEntry(props: ProjectsEntryProps) {
    return (
        <div className="bg-white p-4 border border-slate-200 rounded-xl shadow-sm mx-4 my-8">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-sky-800">{props.title}</h3>
                <h4 className="mb-2 italic text-slate-500">{props.employer}</h4>
            </div>
            <div className=" text-xl italic text-slate-500">
                {props.children}
            </div>
        </div>
    )
}