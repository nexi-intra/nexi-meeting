"use client";

import React from "react";
import { useMeetingsCountryTable } from "@/components/database/meetings/country";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CountriesPage() {
  const countries = useMeetingsCountryTable();

  return (
    <div>
      {countries.error}
      {countries.dataset.map((country) => (
        <div key={country.id}>
          <Link href={`/meeting/admin/table/country/${country.id}`}>
            <Button>{country.name}</Button>
          </Link>
        </div>
      ))}
    </div>
  );
}
