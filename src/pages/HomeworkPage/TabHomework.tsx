import React, { useState } from "react";
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
  const [wordToSearch, setWordToSearch] = useState<string>("");
  const handleSearch = function (event: any): void {
    event.preventDefault();
    EntryService.getEntries(wordToSearch).then((res) => {
      setEntries(res);
    });
  };
  const onWordToSearchChange = function (event: any): void {
    if (event.detail.value) {
      let auxWordToSearch: string = event.detail.value;
      setWordToSearch(auxWordToSearch);
    }
  };
  const handleItemClick = function (entry:Entry): void{
    console.log("item clicked: " + entry.id)
    props.history.push({
      pathname: '/entryDetail',
      search: '',
      state: { entry: entry }
    });
  };

  const handleIconClick = function (id:number): void{
    console.log("icon clicked: " + id)
  };
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
        <form onSubmit={handleSearch}>
          <IonItem>
            <IonLabel position="floating">Search</IonLabel>
            <IonInput
              value={wordToSearch}
              onIonChange={onWordToSearchChange}
            ></IonInput>
          </IonItem>
        </form>
        <IonList style={styles.IonList}>
          {entries.map((entry) => (
            <EntryCard 
              key={entry.id}  
              entry={entry}
              onItemClick={() => handleItemClick(entry)}
              onIconClick={() => handleIconClick(entry.id)}
            />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
}

export default TabHomework;
