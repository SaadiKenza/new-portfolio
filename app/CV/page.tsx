import CVEntry from "../components/CVEntry";

export default  function CV() {
    return(
        <>
            <h1 className="text-center text-3xl my-8">Curriculum Vitae</h1>
            <h1 className="text-2xl my-8">Expérience</h1>   
            <CVEntry title="Etudiante en inforlatique/electronique" employer="ECAM">
                <ul>
                    <li>prends des cours</li>
                </ul>
            </CVEntry>
        </>
    )
}

