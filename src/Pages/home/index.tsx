import { useEffect, useState } from "react";
import api from "../../services/api";

interface ChampionshipDatabase {
    id: Number;
    abbreviation: String;
    city: String;
    conference: String;
    division: String;
    full_name: String;
    name: String;
}

interface Team {
    team?: String;
    wins?: Number;
}

const Home = () => {

    const [popUpShowChampion, setPopUpShowChampion] = useState(false);

    const [championship, setChampionship] = useState<ChampionshipDatabase[]>([])
    const [clubs, setClubs] = useState<Team[]>([])

    const changePopUpShowChampion = () => {
        setPopUpShowChampion(true);
    };

    const requestClubsSeason2020 = async (page_number: Number) => {
        await api
        .get(`?seasons[]=2020&postseason=false&per_page=100&page=${page_number}`)
        .then((response: any) => {
            const data = response.data.data
            setChampionship((oldState) => [...oldState, ...data])
            if (response.data.meta.next_page){
                const nextPage = response.data.meta.next_page
                requestClubsSeason2020(nextPage)
            }
        }).catch(err => console.log(err))
    }

    const updateClubsDatabase = (team_current: ChampionshipDatabase) => {
        let team: Team = {team: team_current.full_name}
        let teamExist: any = clubs.find(item => item.team === team_current.full_name)
        if (!teamExist){
            const clubsList = clubs
            team = {...team, wins: 1}
            clubsList.push(team)
            setClubs(clubs)
        } 
        else {
            const teamIndex = clubs.findIndex((item) => item.team === teamExist.team);
            const clubsList = clubs
            clubsList[teamIndex] = {...teamExist, wins: teamExist['wins']+=1}
            setClubs(clubsList)
        }
    }

    const verifyTeamWinner = (game: any) => {
        const {
            visitor_team_score, 
            home_team_score,
            home_team,
            visitor_team,
            ...rest
        } = game
        const teamHomeWinner = home_team_score > visitor_team_score
        if (teamHomeWinner){
            let teamExist: any = clubs.find(item => item.team === home_team.full_name)
            if (!teamExist){
                return updateClubsDatabase(home_team)
            } 
            else {
                return updateClubsDatabase(visitor_team)
            }
        }
    }

    useEffect (() => {
        requestClubsSeason2020(1)
        championship.map(item => verifyTeamWinner(item))
    }, [])


    return (
        <h1>Home</h1>
    )
}

export default Home