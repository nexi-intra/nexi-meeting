import { useSQLSelect3 } from "@/app/koksmat/usesqlselect3";
import { useEffect, useState } from "react";

export interface TableProps<T> {
  filter?: (item: T) => boolean;
  add?: (item: T) => Promise<{ success: boolean; message: string; id: string }>;
  update?: (
    id: string,
    item: T
  ) => Promise<{ success: boolean; message: string }>;
  delete?: (id: string) => Promise<{ success: boolean; message: string }>;
}
export default function useTable<T>(
  database: string,
  table: string,
  methods?: TableProps<T>
) {
  const [error, seterror] = useState("");
  const data = useSQLSelect3<T>(database, `select * from ${table} limit 1000`);
  useEffect(() => {
    if (data.isLoading) return;
    if (data.error) {
      seterror(data.error);
      return;
    }
  }, [data]);

  return {
    data,
    error,
  };
}
