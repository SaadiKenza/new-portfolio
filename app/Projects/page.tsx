import ProjectsEntry from "../components/ProjectsEntry";

export default  function Projects() {
    return(
        <>
            <h1 className="text-center text-3xl my-8">Projets</h1> 
            <ProjectsEntry title="Démineur" employer="Projet scolaire">
                <ul>
                    <li>Langage: Python avec utilisation de Pygame</li>
                </ul>
            </ProjectsEntry >
            <ProjectsEntry title="Chess DB" employer="Projet scolaire">
                <ul>
                    <li>Langage: C# avec l'utilisation d'Avalonia UI et SQLite</li>
                </ul>
            </ProjectsEntry >
        </>
    )
}

