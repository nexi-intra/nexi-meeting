"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const frameworks = [
  {
    value: "Nexi Austria GmbH (Austria)",
    label: "Nexi Austria GmbH (Austria)",
  },
  { value: "Nexi Payments (Belgium)", label: "Nexi Payments (Belgium)" },
  { value: "Nexi Croatia (Croatia)", label: "Nexi Croatia (Croatia)" },
  {
    value: "Nexi Czech Republic, s.r.o. (Czech Republic)",
    label: "Nexi Czech Republic, s.r.o. (Czech Republic)",
  },
  { value: "Nets (Denmark)", label: "Nets (Denmark)" },
  { value: "Dankort (Denmark)", label: "Dankort (Denmark)" },
  { value: "e-Boks (Denmark)", label: "e-Boks (Denmark)" },
  { value: "NemID (Denmark)", label: "NemID (Denmark)" },
  { value: "Storebox (Denmark)", label: "Storebox (Denmark)" },
  { value: "SignaturGruppen (Denmark)", label: "SignaturGruppen (Denmark)" },
  { value: "Nets (Estonia)", label: "Nets (Estonia)" },
  { value: "Nets (Finland)", label: "Nets (Finland)" },
  {
    value: "Nexi Digital Finland (Finland)",
    label: "Nexi Digital Finland (Finland)",
  },
  { value: "Checkout (Finland)", label: "Checkout (Finland)" },
  { value: "Paytrail (Finland)", label: "Paytrail (Finland)" },
  {
    value: "Nexi Germany GmbH (Germany)",
    label: "Nexi Germany GmbH (Germany)",
  },
  { value: "Ratepay (Germany)", label: "Ratepay (Germany)" },
  {
    value: "Nexi Payments Zweigniederlassung Deutschland (Germany)",
    label: "Nexi Payments Zweigniederlassung Deutschland (Germany)",
  },
  {
    value: "Service Hub Zweigstelle Deutschland (Germany)",
    label: "Service Hub Zweigstelle Deutschland (Germany)",
  },
  {
    value: "Nexi Payments Greece (Greece)",
    label: "Nexi Payments Greece (Greece)",
  },
  { value: "Nexi Greece (Greece)", label: "Nexi Greece (Greece)" },
  {
    value: "Nexi Central Europe, a.s. Hungarian Branch (Hungary)",
    label: "Nexi Central Europe, a.s. Hungarian Branch (Hungary)",
  },
  { value: "Nexi Italy (Italy)", label: "Nexi Italy (Italy)" },
  { value: "SIApay (Italy)", label: "SIApay (Italy)" },
  { value: "Nets (Latvia)", label: "Nets (Latvia)" },
  { value: "Nets (Lithuania)", label: "Nets (Lithuania)" },
  {
    value: "Nexi Payments (Netherlands)",
    label: "Nexi Payments (Netherlands)",
  },
  { value: "Nets (Norway)", label: "Nets (Norway)" },
  {
    value: "Polskie ePłatności (Poland)",
    label: "Polskie ePłatności (Poland)",
  },
  { value: "Przelewy24 (Poland)", label: "Przelewy24 (Poland)" },
  { value: "eCard (Poland)", label: "eCard (Poland)" },
  { value: "Nexi Payments (Poland)", label: "Nexi Payments (Poland)" },
  {
    value: "SIA Romania Payment Technologies (Romania)",
    label: "SIA Romania Payment Technologies (Romania)",
  },
  {
    value: "Nexi S.p.A. Milano Sucursala Bucuresti (Romania)",
    label: "Nexi S.p.A. Milano Sucursala Bucuresti (Romania)",
  },
  { value: "Nexi RS d.o.o (Serbia)", label: "Nexi RS d.o.o (Serbia)" },
  {
    value: "Nexi Central Europe (Slovakia)",
    label: "Nexi Central Europe (Slovakia)",
  },
  { value: "Nets (Sweden)", label: "Nets (Sweden)" },
  {
    value: "Nexi Schweiz AG (Switzerland)",
    label: "Nexi Schweiz AG (Switzerland)",
  },
  { value: "Nexi (Albania)", label: "Nexi (Albania)" },
  {
    value: "Nexi (Bosnia and Herzegovina)",
    label: "Nexi (Bosnia and Herzegovina)",
  },
  { value: "Nexi (Luxembourg)", label: "Nexi (Luxembourg)" },
  { value: "Nexi (Slovenia)", label: "Nexi (Slovenia)" },
  { value: "Nexi (South Africa)", label: "Nexi (South Africa)" },
  { value: "Nexi (United Kingdom)", label: "Nexi (United Kingdom)" },
];

export default function PickCostCentre() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select company ..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search companies..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
