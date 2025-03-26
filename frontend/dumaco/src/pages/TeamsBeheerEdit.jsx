import '../styling/teamsBeheerEdit.css'


function TeamsBeheerEdit(){

    return(
        <div className="team-beheer-container">
        <p>Team naam</p>
        <input type="text" value={"Team Blauw"} className="team-beheer-text"></input>
        <p>Primare Kleur</p>
        <input type="color" value={"#0D20E7"} className="team-beheer-color"></input>
        <p>Secundaire Kleur</p>
        <input type="color" value={"#A8C3FF"} className="team-beheer-color"></input>
        <p>Tertiare Kleur</p>
        <input type="color" value={"#E1ECFF"} className="team-beheer-color"></input>
        <p>Beschrijving</p>
        <textarea value={"Dit is waar alle coole kikkers zitten"} className="team-beheer-textArea"></textarea>
        <br/>
        <div className="team-beheer-buttons">
            <button className="team-beheer-opslaan">Opslaan</button>
            <button className="team-beheer-annuleren">Annuleren</button>
        </div>

    </div>

    )

}

export default TeamsBeheerEdit