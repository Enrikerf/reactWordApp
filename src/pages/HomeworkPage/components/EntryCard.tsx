import React from "react";
import {
  IonLabel,
  IonItem,
  IonIcon,
  IonItemOption,
  IonItemSliding,
  IonItemOptions,
  IonText,
} from "@ionic/react";
import { volumeMediumOutline } from "ionicons/icons";

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


export default EntryCard;