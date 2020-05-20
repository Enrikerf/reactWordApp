import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonItem,
  IonInput,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonIcon,
  IonList,
  IonListHeader,
  IonItemOption,
  IonItemSliding,
  IonItemOptions,
} from "@ionic/react";
import { volumeMediumOutline } from "ionicons/icons";
import { Entry } from "../../shared/modules/api-kerf/models/entry";

const TabHomework: React.FC = () => {
  const styles = {
    volumeIcon: {
      display: "flex",
      justifyContent: "flex-end",
    },
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>homework</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <form>
          <div className="form-group">
            <IonItem>
              <IonLabel position="floating">Buscar</IonLabel>
              <IonInput
                id="wordToSearch"
                name="wordToSearch"
                class="form-control"
              ></IonInput>
            </IonItem>
          </div>
        </form>
        <div className="list-content">
          <IonList>
            <IonItemSliding>
              <IonItem>
                <IonLabel>Set</IonLabel>
                <IonLabel>set</IonLabel>
                <IonLabel>range: 1K</IonLabel>
                <div style={styles.volumeIcon}>
                  <IonIcon size="large" icon={volumeMediumOutline} />
                </div>
              </IonItem>

              <IonItemOptions side="start">
                <IonItemOption color="primary">Mark Unread</IonItemOption>
              </IonItemOptions>

              <IonItemOptions side="end">
                <IonItemOption color="danger">Delete</IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default TabHomework;
