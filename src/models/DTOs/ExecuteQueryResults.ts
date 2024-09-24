import { DataTable } from "../DataTable";
import { Query } from "../Query";
import { Status } from "../Status";

export type ExecuteQueryResults = {
  query: Query;
  data: DataTable;
  status: Status;
};
