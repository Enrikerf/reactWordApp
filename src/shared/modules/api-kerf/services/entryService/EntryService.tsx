import { Entry } from "../../models/entry";
import entryMocks from "./mocks/entryMocks";

//TODO: module apiKerfConfig to remove this hardcode
const mode: string = "dev";
const EntryService = {
  getEntries: (wordToSearch:string): Promise<Entry[]> => {
    let response;
    if (mode !== "dev") {
      response = fetch("http://localhost:8007/api/default/user/" + wordToSearch)
        .then((res) => res.json())
        .then((data) => {
          return data;
        })
    } else {
      response = new Promise((resolve, reject) => {
        resolve(entryMocks.getEntryList());
      });
    }
    return response;
  },
};

export default EntryService;
