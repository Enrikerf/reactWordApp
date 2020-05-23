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
  IonIcon,
  IonList,
  IonItemOption,
  IonItemSliding,
  IonItemOptions,
  IonText,
} from "@ionic/react";
import { volumeMediumOutline } from "ionicons/icons";
import { Entry } from "../../shared/modules/api-kerf/models/entry";

class TabHomework extends React.Component {
  public entries: Entry[];
  constructor(props: any) {
    super(props);
    this.state = {};
    this.entries = [
      {
        word: "string",
        results: [],
        pronunciation: "any",
        frequency: 4,
      },
      {
        word: "string",
        results: [],
        pronunciation: "any",
        frequency: 4,
      },
      {
        word: "string",
        results: [],
        pronunciation: "any",
        frequency: 4,
      },
    ];
  }
  render() {
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
          <div>
            <IonList>
              {this.entries.map((el) => (
                <EntryCard />
              ))}
            </IonList>
          </div>
        </IonContent>
      </IonPage>
    );
  }
}

class EntryCard extends React.Component {
  render() {
    const styles = {
      none: {},
    };
    return (
      <IonItemSliding style={styles.none}>
        <IonItem lines="none" style={styles.none}>
          <IonLabel class="ion-text-wrap" onClick={() => alert("item")}>
            <IonText color="primary">
              <h3>H3 Primary Title</h3>
            </IonText>
            <p>Paragraph line 1</p>
          </IonLabel>
          <IonIcon
            size="large"
            slot="end"
            icon={volumeMediumOutline}
            onClick={() => alert("volumen")}
          />
        </IonItem>
        <IonItemOptions side="start">
          <IonItemOption color="success">Done</IonItemOption>
        </IonItemOptions>
        <IonItemOptions side="end">
          <IonItemOption color="secondary">Remind</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
    );
  }
}
export default TabHomework;
