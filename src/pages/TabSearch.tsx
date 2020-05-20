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
  IonButton,
  IonCardContent,
} from "@ionic/react";

const TabSearch: React.FC = () => {
  const p = "";
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
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>frequency</IonCardSubtitle>
              <IonCardTitle>word</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              pronunciation
              <div className="card-content">
                <IonButton class="card-content-button">
                  <IonLabel text-wrap>Review tomorrow</IonLabel>
                </IonButton>
                <IonButton class="card-content-button">
                  <IonLabel text-wrap>Review in X days</IonLabel>
                </IonButton>
                <IonButton class="card-content-button">
                  <IonLabel text-wrap>Learn</IonLabel>
                </IonButton>
              </div>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default TabSearch;
