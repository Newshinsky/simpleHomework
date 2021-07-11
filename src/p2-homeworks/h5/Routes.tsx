import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Error404 from './pages/Error404'
import JuniorPlus from './pages/JuniorPlus'
import Junior from './pages/Junior'
import PreJunior from './pages/PreJunior'

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIORPLUS: '/junior-plus',
}

function Routes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать пFолное совподение (что после '/' ничего не будет)*/}
                <Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR} />} />
                <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior />} />

                <Route path={'/'} exact render={() => <Redirect to={PATH.JUNIOR} />} />
                <Route path={PATH.JUNIOR} render={() => <Junior />} />

                <Route path={'/'} exact render={() => <Redirect to={PATH.JUNIORPLUS} />} />
                <Route path={PATH.JUNIORPLUS} render={() => <JuniorPlus />} />
                {/* // add routes */}

                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route render={() => <Error404 />} />

            </Switch>
        </div>
    )
}

export default Routes
