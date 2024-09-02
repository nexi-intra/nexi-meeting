import React from "react";
import { z, ZodObject } from "zod";
import { databaseName } from ".";
import useDatabaseRecord from "@/components/hooks/use-database-record";
import { useSQLSelect3 } from "@/app/koksmat/usesqlselect3";

export const tableName = "country";
export const schema = z
  .object({
    id: z.string().optional(),
    tenant: z.string().optional(),
    searchindex: z
      .string()
      .describe(
        "Search Index is used for concatenating all searchable fields in a single field making in easier to search\n"
      )
      .optional(),
    name: z.string().optional(),
    description: z.string().optional(),
    code: z.string().optional(),
    currency: z.string().optional(),
  })
  .describe("Create operation");

export function useMeetingsCountryTableItem(key: string) {
  const model = useDatabaseRecord(schema, key, databaseName, tableName);
  return {
    ...model,
  };
}

export function useMeetingsCountryTable() {
  const table = useSQLSelect3<z.infer<typeof schema>>(
    databaseName,
    `select * from ${tableName} where deleted_at is null  order by name`
  );

  return { ...table };
}
