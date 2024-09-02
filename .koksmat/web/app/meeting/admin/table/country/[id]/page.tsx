"use client";

import { useMeetingsCountryTableItem } from "@/components/database/meetings/country";

import React from "react";

export default function CountryPage(props: { params: { id: string } }) {
  const item = useMeetingsCountryTableItem(props.params.id);
  return (
    <div>
      {item.error && <div className="text-red-500">{item.error}</div>}
      <pre>{JSON.stringify(item, null, 2)}</pre>
    </div>
  );
}
