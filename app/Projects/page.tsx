import ProjectsEntry from "../components/ProjectsEntry";
import { getProjects, createProject, deleteProject } from "./action"; 

export default async function Projects() {
    const projects = await getProjects();

    return(
        <>
            <h1 className="text-center text-3xl my-8">Projets</h1> 

            {/* --- FORMULAIRE D'AJOUT (Inchangé) --- */}
            <div className="bg-slate-100 p-6 border-2 border-dashed border-slate-300 rounded-xl mx-4 mb-8">
                <h2 className="text-xl font-bold text-slate-700 mb-4">Ajouter un nouveau projet</h2>
                <form action={createProject} className="flex flex-col gap-3">
                    <input name="title" type="text" placeholder="Titre du projet" className="p-2 rounded border border-slate-300" required />
                    <input name="employer" type="text" placeholder="Contexte" className="p-2 rounded border border-slate-300" required />
                    <input name="description" type="text" placeholder="Description" className="p-2 rounded border border-slate-300" required />
                    <button type="submit" className="bg-sky-800 text-white font-bold py-2 px-4 rounded hover:bg-sky-700 transition mt-2 cursor-pointer">
                        Ajouter le projet
                    </button>
                </form>
            </div>

            {/* --- LISTE DES PROJETS --- */}
            <div className="space-y-4">
                {projects.map((project) => (
                    <div key={project.id} className="relative group">
                        
                        {/* Le composant d'affichage */}
                        <ProjectsEntry 
                            title={project.title} 
                            employer={project.employer}
                        >
                            <div className="flex justify-between items-start">
                                <ul className="list-disc pl-5">
                                    <li>{project.description}</li>
                                </ul>

                                {/* BOUTON SUPPRIMER */}
                                {/* On utilise un formulaire pour déclencher l'action serveur */}
                                <form action={deleteProject.bind(null, project.id)}>
                                    <button 
                                        type="submit" 
                                        className="text-red-400 hover:text-red-700 text-sm font-bold border border-red-200 hover:bg-red-50 rounded px-2 py-1 transition ml-4 cursor-pointer"
                                        title="Supprimer ce projet"
                                    >
                                        Supprimer 🗑️
                                    </button>
                                </form>
                            </div>
                        </ProjectsEntry>

                    </div>
                ))}
            </div>
        </>
    )
}

