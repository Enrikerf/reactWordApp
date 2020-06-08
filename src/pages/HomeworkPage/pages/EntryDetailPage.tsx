import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useLocation } from "react-router";
import EntryService from "../../../shared/modules/api-kerf/services/entryService/EntryService";
import { Entry } from "../../../shared/modules/api-kerf/models/entry";

function EntryDetailPage(props: any) {
  const location = useLocation();
  const [entry, setEntry] = useState<Entry | undefined>(undefined);

  useEffect(() => {
    console.log(location);
    let auxEntry = location.state;
    
  }, [location]);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>asdf</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>Detail Word</IonContent>
    </IonPage>
  );
}

export default EntryDetailPage;
