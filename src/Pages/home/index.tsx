import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Header from "../../components/Header";
import PopUpShowChampion from "../../components/Modals/ModalShowChampion";
import DataGridDemo from "../../components/Table";
import api from "../../services/api";
import { Container, ContentButtons, ContentImage, ContentInfo, ContentMain, Image } from "./style";

interface ChampionshipDatabase {
    id: Number | undefined;
    abbreviation: String;
    city: String;
    conference: String;
    division: String;
    full_name: String;
    name: String;
}

interface Team {
    id?: Number;
    position?: Number;
    team?: String;
    wins?: Number | any;
}

const Home = () => {

    const [championship, setChampionship] = useState<ChampionshipDatabase[]>([])
    const [clubs, setClubs] = useState<Team[]>([])
    const [buttonTextAlternative, setButtonTextAlternative] = useState<Boolean>(false)

    const [refresh, setRefresh] = useState(false)
    const [refreshClubs, setRefreshClubs] = useState(false)

    const [popUpShowChampion, setPopUpShowChampion] = useState(false);
    const [showClassification, setShowClassification] = useState(false)

    const changePopUpShowChampion = () => {
        setPopUpShowChampion(true);
    };

    const showTableOfClassification = () => {
        setShowClassification(!showClassification);
        setButtonTextAlternative(!buttonTextAlternative)
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
            } else {
                setRefresh(true)
            }
        }).catch(err => console.log(err))
    }

    const updateClubsDatabase = (team_current: ChampionshipDatabase) => {
        let team: Team = {team: team_current.full_name}
        let teamExist: any = clubs.find(item => item.team === team_current.full_name)
        if (!teamExist){
            const clubsList = clubs
            team = {...team, wins: 1, id: clubsList.length+1}
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

    const classificationOfChampionship = () => {
    
        clubs.sort(function(a,b) {
            return a.wins > b.wins ? -1 : a.wins < b.wins ? 1 : 0;
        });
    
        clubs.forEach((item, index) => {
            const clubsList = clubs
            clubsList[index] = { ...item, position: index+1}
            setClubs(clubsList)
        })
    }

    useEffect (() => {
        requestClubsSeason2020(1)
    }, [])

    useEffect(() => {
        if (refresh){
            championship.forEach((item, index) => {
                verifyTeamWinner(item)
                if (index === championship.length-1){
                    setRefreshClubs(true)
                }
            })
        }
    }, [refresh])

    useEffect(() => {
        if (refreshClubs){
        classificationOfChampionship()
        }
    }, [refreshClubs])


    const teamWinner = clubs.find(
        item => item.wins === Math.max(...clubs.map(item => item.wins))
    )
    
    return (
        <Container>
            <Header/>
            {popUpShowChampion && <PopUpShowChampion setPopup={setPopUpShowChampion} team={teamWinner}/>}
            <ContentMain>
                <ContentInfo>
                <h1> Championship Season 2020 </h1>
                <h2> Pareamento JavaScript nave.rs </h2>
                <ContentButtons>
                <Button 
                    text="Champion" 
                    color="#FF0000" 
                    onclick={changePopUpShowChampion}
                />
                <Button 
                    text={buttonTextAlternative ? "Last Champions": "Classification"}
                    color="#464646"
                    onclick={showTableOfClassification}
                />
                </ContentButtons>
                <DataGridDemo 
                    show={showClassification} 
                    teams={clubs} 
                    refresh={refreshClubs}
                />
                </ContentInfo>
                <ContentImage>
                    <Image 
                        src={require("../../assets/nba-logo.jpeg")}
                        alt="nba-logo.jpeg"
                    />
                </ContentImage>
            </ContentMain>

        </Container>
    )
}

export default Home