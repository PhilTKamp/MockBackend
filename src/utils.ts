import { randomUUID } from "crypto";
import { ColumnSummary } from "./models/ColumnSummary";
import { DataSource } from "./models/DataSource";
import { Query } from "./models/Query";
import { ExecuteQueryResults } from "./models/ExecuteQueryResults";
import { DataRow } from "./models/DataTable";

export const genericColumnNames = [
  "id",
  "name",
  "age",
  "email",
  "address",
  "phone",
  "createdAt",
  "updatedAt",
  "status",
  "role",
];

export const genericStringValues = [
  "Lorem",
  "Ipsum",
  "Dolor",
  "Sit",
  "Amet",
  "Consectetur",
  "Adipiscing",
  "Elit",
  "Sed",
  "Do",
  "Eiusmod",
  "Tempor",
  "Incididunt",
  "Ut",
  "Labore",
  "Et",
  "Dolore",
  "Magna",
  "Aliqua",
];

export const getGenericColumnName = () => {
  return genericColumnNames[
    Math.floor(Math.random() * genericColumnNames.length)
  ];
};

export const getGenericStringValue = () => {
  return genericStringValues[
    Math.floor(Math.random() * genericStringValues.length)
  ];
};

export function generateColumnSummary(count: number): ColumnSummary[] {
  const columns: ColumnSummary[] = [];

  for (let i = 0; i < count; i++) {
    let column1 = getGenericStringValue();
    let column2 = getGenericStringValue();
    let column3 = getGenericStringValue();
    let column4 = getGenericStringValue();
    let column5 = getGenericStringValue();

    columns.push({
      columnName: `column${i}`,
      description: `description${i}`,
      dataType: `dataType${i}`,
      min: `min${i}`,
      max: `max${i}`,
      median: `median${i}`,
      top5MostCommonValues: {
        [column1]: Math.random() * 100,
        [column2]: Math.random() * 100,
        [column3]: Math.random() * 100,
        [column4]: Math.random() * 100,
        [column5]: Math.random() * 100,
      },
      distinctValuesCount: i,
    });
  }
  return columns;
}

export function getDataSourceSummary(): DataSource {
  return {
    id: randomUUID(),
    adlPath: "adlPath",
    quickQuery: "quickQuery",
    columns: generateColumnSummary(10),
  };
}

export function getQuerySummary(): Query {
  return {
    id: randomUUID(),
    title: "title",
    query: "query",
    owner: "owner",
    adlPath: "adlPath",
  };
}

export function generateRowSummary(
  columns: string[],
  rowCount: number
): DataRow[] {
  return Array.from({ length: rowCount }, () => {
    let row: DataRow = {};
    columns.forEach((column) => {
      row[column] = getGenericStringValue();
    });
    return row;
  });
}

export function generateQueryResults(
  columnCount: number,
  rowCount: number
): ExecuteQueryResults {
  let columns = generateColumnSummary(columnCount);
  let rows = generateRowSummary(
    columns.map((col) => col.columnName),
    rowCount
  );

  return {
    query: getQuerySummary(),
    data: {
      columns,
      rows,
    },
    status: {
      success: true,
      message: "message",
    },
  };
}
