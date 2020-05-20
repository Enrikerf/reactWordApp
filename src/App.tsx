import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle, searchOutline, folderOutline, barbellOutline } from 'ionicons/icons';
import TabSearch from './pages/SearchPage/TabSearch';
import TabKnowledge from './pages/KnowledgePage/TabKnowledge';
import TabHomework from './pages/HomeworkPage/TabHomework';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/tabHomework" component={TabHomework} exact={true} />
          <Route path="/tabKnowledge" component={TabKnowledge} exact={true} />
          <Route path="/tabSearch" component={TabSearch} />
          <Route path="/" render={() => <Redirect to="/tabHomework" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tabHomework" href="/tabHomework">
            <IonIcon icon={barbellOutline} />
            <IonLabel>Homework</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tabKnowledge" href="/tabKnowledge">
            <IonIcon icon={folderOutline} />
            <IonLabel>Knowledge</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tabSearch" href="/tabSearch">
            <IonIcon icon={searchOutline} />
            <IonLabel>Search</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
