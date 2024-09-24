import { DataSource } from "../DataSource";
import { Status } from "../Status";

export type AskQuestionResponse = {
  question: string;
  answer: string;
  sources: DataSource[];
  status: Status;
};
