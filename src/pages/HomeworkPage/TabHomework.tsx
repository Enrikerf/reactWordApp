import React, { useEffect, useState, useContext } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonItem,
  IonInput,
  IonList,
} from "@ionic/react";

import { Entry } from "../../shared/modules/api-kerf/models/entry";

import EntryCard from "./components/EntryCard";
import EntryService from "../../shared/modules/api-kerf/services/entryService/EntryService";


function TabHomework(props: any) {
  const [entries, setEntries] = useState([] as Entry[]);
  useEffect(() => {
    EntryService.getEntries().then((res) => {
      setEntries(res);
    });
  }, []);

  const styles = {
    IonList: {
      height: "100%",
      overflowY: "scroll",
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
        <IonList style={styles.IonList}>
          {entries.map((el) => (
            <EntryCard key={el.id} />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
}

export default TabHomework;
