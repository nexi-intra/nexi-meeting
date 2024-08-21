import React, { useState } from "react";
import { PlusIcon, GlobeIcon, MapPinIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";

// Define the interfaces for our data structures
interface Site {
  id: string;
  name: string;
}

interface Country {
  id: string;
  name: string;
  sites: Site[];
}

// CountryCard component to display individual countries and their sites
const CountryCard: React.FC<{
  country: Country;
  onAddSite: (countryId: string, siteName: string) => void;
}> = ({ country, onAddSite }) => {
  const [newSiteName, setNewSiteName] = useState("");

  const handleAddSite = () => {
    if (newSiteName.trim()) {
      onAddSite(country.id, newSiteName.trim());
      setNewSiteName("");
    }
  };

  return (
    <Card className="w-[300px]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GlobeIcon className="h-5 w-5" />
          {country.name}
        </CardTitle>
        <CardDescription>{country.sites.length} sites</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px] w-full pr-4">
          {country.sites.map((site) => (
            <div key={site.id} className="flex items-center gap-2 mb-2">
              <MapPinIcon className="h-4 w-4 text-muted-foreground" />
              <span>{site.name}</span>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4">
        <div className="flex w-full items-center gap-2">
          <Input
            placeholder="New site name"
            value={newSiteName}
            onChange={(e) => setNewSiteName(e.target.value)}
          />
          <Button size="sm" onClick={handleAddSite}>
            Add
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

// Main Gallery component
export default function ManageCountries() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [newCountryName, setNewCountryName] = useState("");

  const handleAddCountry = () => {
    if (newCountryName.trim()) {
      const newCountry: Country = {
        id: Date.now().toString(),
        name: newCountryName.trim(),
        sites: [],
      };
      setCountries([...countries, newCountry]);
      setNewCountryName("");
    }
  };

  const handleAddSite = (countryId: string, siteName: string) => {
    setCountries(
      countries.map((country) => {
        if (country.id === countryId) {
          return {
            ...country,
            sites: [
              ...country.sites,
              { id: Date.now().toString(), name: siteName },
            ],
          };
        }
        return country;
      })
    );
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Organization Gallery</h1>
      <div className="mb-4 flex gap-2">
        <Input
          placeholder="New country name"
          value={newCountryName}
          onChange={(e) => setNewCountryName(e.target.value)}
        />
        <Button onClick={handleAddCountry}>
          <PlusIcon className="h-4 w-4 mr-2" />
          Add Country
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {countries.map((country) => (
          <CountryCard
            key={country.id}
            country={country}
            onAddSite={handleAddSite}
          />
        ))}
      </div>
    </div>
  );
}
