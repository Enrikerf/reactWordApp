import { Entry } from "../../models/entry";
import entryMocks from "./mocks/entryMocks";

const mode:string = "dev";
const EntryService = {
  getEntries: (): Promise<Entry[]> => {
    let response;
    if (mode !== "dev") {
      response = fetch("http://localhost:8007/api/default/user")
        .then((res) => res.json())
        .then((data) => {
          return data;
        })
        .catch(console.log);
    } else {
      response = new Promise((resolve, reject) => {
        resolve(entryMocks.getEntryList());
      });
    }
    return response;
  },
  /*     
    return [
      {
        id: 1,
        word: "string1",
        results: [],
        pronunciation: "any",
        frequency: 4,
      },
      {
        id: 2,
        word: "string2",
        results: [],
        pronunciation: "any",
        frequency: 4,
      },
      {
        id: 3,
        word: "string3",
        results: [],
        pronunciation: "any",
        frequency: 4,
      },
      {
        id: 4,
        word: "string4",
        results: [],
        pronunciation: "any",
        frequency: 4,
      },
      {
        id: 5,
        word: "string5",
        results: [],
        pronunciation: "any",
        frequency: 4,
      },
      {
        id: 6,
        word: "string3",
        results: [],
        pronunciation: "any",
        frequency: 4,
      },
      {
        id: 7,
        word: "string3",
        results: [],
        pronunciation: "any",
        frequency: 4,
      },
      {
        id: 8,
        word: "string3",
        results: [],
        pronunciation: "any",
        frequency: 4,
      },
      {
        id: 9,
        word: "string3",
        results: [],
        pronunciation: "any",
        frequency: 4,
      },
      {
        id: 10,
        word: "string3",
        results: [],
        pronunciation: "any",
        frequency: 4,
      },
      {
        id: 11,
        word: "string3",
        results: [],
        pronunciation: "any",
        frequency: 4,
      },
      {
        id: 12,
        word: "string3",
        results: [],
        pronunciation: "any",
        frequency: 4,
      },
    ];
     */
};

export default EntryService;
