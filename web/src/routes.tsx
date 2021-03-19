import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import OrphanagesMap from './pages/OrphanagesMap'
import Orphanage from './pages/Orphanage'
import DashboardList from './pages/DashboardList'
import DashboardPendings from './pages/DashboardPendings'
import CreateOrphanage from './pages/CreateOrphanage'
import EditOrphanage from './pages/EditOrphanage'
import Login from './pages/Login'
import ForgetPassword from './pages/ForgetPassword'
import LandingSuccess from './pages/LandingSuccess'
import LandingDelete from './pages/LandingDelete'

function Routes() {
     return (
          <BrowserRouter>
               <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/app" component={OrphanagesMap} />

                    <Route path="/login" component={Login} />
                    <Route path="/forget" component={ForgetPassword} />
                    
                    <Route path="/orphanages/create" component={CreateOrphanage} />
                    <Route path="/orphanages/edit/:id" component={EditOrphanage} />
                    <Route path="/orphanages/:id" component={Orphanage} />

                    <Route path="/dashboard" component={DashboardList} />
                    <Route path="/pendings" component={DashboardPendings} />

                    <Route path="/success" component={LandingSuccess} />
                    <Route path="/delete/:id" component={LandingDelete} />

               </Switch>
          </BrowserRouter>
     )
}

export default Routes