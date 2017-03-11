import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRedirect, IndexRoute, browserHistory } from 'react-router'
import { StoreProvider } from 'ozon-ui-common/lib/Middleware'

// import GeozonesEdit from './Geozones/Edit'
// import GeozonesDetails from './Geozones/Details'
// import GeozonesActions from './Geozones/Actions'

// import Panel from './DeliveryVariant/Panel'
// import DeliveryVariantActions from './DeliveryVariant/Actions'

const Dict = () => <div>
    <h3>dictionary</h3>
    <ul>
        <li>table</li>
        <li>chair</li>
        <li>fork</li>
        <li>spoon</li>
        <li>animal</li>
    </ul>
</div>

render((
    <Dict/>
), document.getElementById('AppContainer'))

// render((
//     <StoreProvider sagaCollections={[GeozonesActions, DeliveryVariantActions]}>
//         <Router history={browserHistory}>
//             <Route path={`${_ROOT_URL_}/Delivery`} component={Panel}>
//                 <Route path='GeozonesDetails/:DeliveryVariantId' component={GeozonesDetails} mode='Details' />
//                 <Route path='GeozonesEdit/:DeliveryVariantId' component={GeozonesEdit} mode='Edit' />
//                 <Route path='*' component={() => window.location = _ROOT_URL_} />
//             </Route>
//         </Router>
//     </StoreProvider>
// ), document.getElementById('AppContainer'))