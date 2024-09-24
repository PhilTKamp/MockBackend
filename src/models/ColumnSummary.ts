export type Generic = string;

export type ColumnSummary = {
  columnName: string;
  description: string;
  dataType: string;
  min: Generic;
  max: Generic;
  median: Generic;
  top5MostCommonValues: Record<Generic, number>;
  distinctValuesCount: number;
};
