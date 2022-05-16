import { Button, Content, Div, DivA, DivContainer, InfoUser } from "./style";

interface PopUpPrios {
  setPopup: (valor: boolean) => void;
  team?: Team | any;
}

interface Team {
  team: String;
  wins: Number;
}

function PopUpShowChampion({ setPopup, team }: PopUpPrios) {
  return (
    <DivA>
      <DivContainer>
        <Div>
          <img
            src={require("../../../assets/star-trophy.png")}
            alt="star-trophy.png"
          />
          <h1>
            {team.team} - {team.wins}pts
          </h1>
          <h2> Clique the bottom to close </h2>
          <Content>
            <InfoUser>
              <Button onClick={() => setPopup(false)}> Close </Button>
            </InfoUser>
          </Content>
        </Div>
      </DivContainer>
    </DivA>
  );
}
export default PopUpShowChampion;
