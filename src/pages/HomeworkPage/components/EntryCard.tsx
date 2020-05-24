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

function EntryCard(props: any) {
  return (
    <IonItemSliding >
      <IonItemOptions side="start">
        <IonItemOption color="success" expandable>Done</IonItemOption>
      </IonItemOptions>
      
      <IonItem lines="none">
        <IonLabel class="ion-text-wrap" onClick={props.onItemClick}>
          <IonText color="primary">
            <h3>
              ({props.entry.id}){props.entry.word}
            </h3>
          </IonText>
          <p>{props.entry.pronunciation}</p>
        </IonLabel>
        <IonIcon
          onClick={props.onIconClick}
          size="large"
          slot="end"
          icon={volumeMediumOutline}
        />
      </IonItem>
      
      <IonItemOptions side="end">
        <IonItemOption color="secondary" expandable>Remind</IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
}

export default EntryCard;
