import {Switch, Route} from "react-router-dom" 
import Home from "../Pages/home";

function Routes(){
    return(
        <div>
            <Switch>
                <Route exact path={"/"}>
                    <Home/>
                </Route>
            </Switch>
        </div>
    )
}

export default Routes;