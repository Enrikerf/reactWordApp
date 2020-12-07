import { Meaning } from "./meaning";
export interface Entry {
  id:number
  word: string;
  results: Meaning[];
  pronunciation: any;
  frequency: number;
  syllables:any;
}
