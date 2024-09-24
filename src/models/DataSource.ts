import { ColumnSummary } from "./ColumnSummary";

export type DataSource = {
  id: string;
  adlPath: string;
  quickQuery: string;
  columns: ColumnSummary[];
};
