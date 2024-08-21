import React, { useState } from "react";
import { PlusIcon, MapPinIcon, BuildingIcon } from "lucide-react";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Define the interfaces for our data structures
interface Building {
  id: string;
  name: string;
  type: string;
}

interface Site {
  id: string;
  name: string;
  location: string;
  buildings: Building[];
}

// BuildingForm component for adding new buildings
const BuildingForm: React.FC<{
  onAddBuilding: (name: string, type: string) => void;
}> = ({ onAddBuilding }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && type.trim()) {
      onAddBuilding(name.trim(), type.trim());
      setName("");
      setType("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="buildingName">Building Name</Label>
        <Input
          id="buildingName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter building name"
        />
      </div>
      <div>
        <Label htmlFor="buildingType">Building Type</Label>
        <Input
          id="buildingType"
          value={type}
          onChange={(e) => setType(e.target.value)}
          placeholder="Enter building type"
        />
      </div>
      <Button type="submit">Add Building</Button>
    </form>
  );
};

// SiteCard component to display individual sites and their buildings
const SiteCard: React.FC<{
  site: Site;
  onAddBuilding: (siteId: string, name: string, type: string) => void;
}> = ({ site, onAddBuilding }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPinIcon className="h-5 w-5" />
          {site.name}
        </CardTitle>
        <CardDescription>{site.location}</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px] w-full pr-4">
          {site.buildings.map((building) => (
            <div key={building.id} className="flex items-center gap-2 mb-2">
              <BuildingIcon className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">{building.name}</span>
              <span className="text-sm text-muted-foreground">
                ({building.type})
              </span>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <PlusIcon className="h-4 w-4 mr-2" />
              Add Building
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Building to {site.name}</DialogTitle>
            </DialogHeader>
            <BuildingForm
              onAddBuilding={(name, type) => onAddBuilding(site.id, name, type)}
            />
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

// Main Gallery component
export default function ManageSites() {
  const [sites, setSites] = useState<Site[]>([]);
  const [newSiteName, setNewSiteName] = useState("");
  const [newSiteLocation, setNewSiteLocation] = useState("");

  const handleAddSite = () => {
    if (newSiteName.trim() && newSiteLocation.trim()) {
      const newSite: Site = {
        id: Date.now().toString(),
        name: newSiteName.trim(),
        location: newSiteLocation.trim(),
        buildings: [],
      };
      setSites([...sites, newSite]);
      setNewSiteName("");
      setNewSiteLocation("");
    }
  };

  const handleAddBuilding = (siteId: string, name: string, type: string) => {
    setSites(
      sites.map((site) => {
        if (site.id === siteId) {
          return {
            ...site,
            buildings: [
              ...site.buildings,
              { id: Date.now().toString(), name, type },
            ],
          };
        }
        return site;
      })
    );
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Organization Site Gallery</h1>
      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          placeholder="New site name"
          value={newSiteName}
          onChange={(e) => setNewSiteName(e.target.value)}
        />
        <Input
          placeholder="New site location"
          value={newSiteLocation}
          onChange={(e) => setNewSiteLocation(e.target.value)}
        />
        <Button onClick={handleAddSite} className="md:col-span-2">
          <PlusIcon className="h-4 w-4 mr-2" />
          Add Site
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sites.map((site) => (
          <SiteCard
            key={site.id}
            site={site}
            onAddBuilding={handleAddBuilding}
          />
        ))}
      </div>
    </div>
  );
}
