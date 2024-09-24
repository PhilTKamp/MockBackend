export type DataColumn = {
  columnName: string;
};

export type DataRow = { [key: string]: string };

/**
 * Minimal mocked version of the DataTable object from Dotnet
 */
export type DataTable = {
  columns: DataColumn[];
  rows: DataRow[];
};
