"use client";
import React, { useContext, useEffect, useState } from "react";

import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import {
  ChevronDownIcon,
  EnvelopeClosedIcon,
  GearIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/use-toast";
import { MagicboxContext } from "@/app/koksmat/magicbox-context";
import { https } from "@/app/koksmat/httphelper";

const searchFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
});

export interface User {
  "@odata.context": string;
  businessPhones: string[];
  displayName: string;
  givenName: string;
  jobTitle?: any;
  mail: string;
  mobilePhone: string;
  officeLocation: string;
  preferredLanguage?: any;
  surname: string;
  userPrincipalName: string;
  id: string;
}
export interface UserSearchResultItem {
  id: string;
  displayName: string;
  givenName: string;
  surname: string;
  birthday?: any;
  personNotes?: any;
  isFavorite: boolean;
  jobTitle?: any;
  companyName: string;
  yomiCompany?: any;
  department: string;
  officeLocation: string;
  profession?: any;
  userPrincipalName: string;
  imAddress: string;
  scoredEmailAddresses: ScoredEmailAddress[];
  phones: Phone[];
  personType: PersonType;
}

export interface PersonType {
  class: string;
  subclass: string;
}

export interface Phone {
  type: string;
  number: string;
}

export interface ScoredEmailAddress {
  address: string;
  relevanceScore: number;
  selectionLikelihood: string;
}

export interface oData<T> {
  "@odata.context": string;
  value: T[];
}
type SearchFormValues = z.infer<typeof searchFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<SearchFormValues> = {
  // name: "Your name",
  // dob: new Date("2023-01-23"),
};
type Props = {
  onSelectUser: (user: UserSearchResultItem | null) => void;
  defaultuserUserPrincipalName?: string;
};

type UserProps = {
  onSelectUser: (user: UserSearchResultItem) => void;

  user: UserSearchResultItem;
};

type UserAvatarProps = {
  userPrincipalName: string;
};
export function UserAvatar({ userPrincipalName }: UserAvatarProps) {
  const magicbox = useContext(MagicboxContext);
  const [image, setimage] = useState("");
  useEffect(() => {
    const load = async (accessToken: string) => {
      let image: string = await getImage(userPrincipalName, accessToken);

      setimage(image);
    };
    if (magicbox.authtoken && userPrincipalName) {
      load(magicbox.authtoken);
    } else {
      setimage("");
    }
  }, [userPrincipalName]);
  return (
    <Avatar className="mr-2 h-8 w-8  ">
      <AvatarImage src={image} alt={"Image of " + userPrincipalName} />
      <AvatarFallback>
        <AvatarImage
          src="/avatars/01.png"
          alt={"Image of " + userPrincipalName}
        />
      </AvatarFallback>
    </Avatar>
  );
}

export function ShowUser({ onSelectUser, user }: UserProps) {
  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        onSelectUser(user);
      }}
    >
      <div className="flex ">
        <div className="pr-2">
          <UserAvatar userPrincipalName={user.userPrincipalName} />
        </div>
        <div>
          <div>{user.displayName}</div>
          <div className="">{user.userPrincipalName}</div>
        </div>
      </div>
    </div>
  );
}

async function getImage(upn: string, accessToken: string) {
  const response = await fetch(
    `https://graph.microsoft.com/v1.0/users/${upn}/photos/${48}x${48}/$value`,
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );

  // Confirm that profile photo was returned
  let image: string = "";
  // TODO: Do this without Buffer
  if (response.ok && typeof Buffer !== "undefined") {
    try {
      const pictureBuffer = await response.arrayBuffer();
      const pictureBase64 = Buffer.from(pictureBuffer).toString("base64");
      image = `data:image/jpeg;base64, ${pictureBase64}`;
    } catch {}
  }
  return image;
}

export function SearchUserForm({
  onSelectUser,
  defaultuserUserPrincipalName,
}: Props) {
  const magicbox = useContext(MagicboxContext);
  const { toast } = useToast();
  const [searchFor, setsearchFor] = useState("");
  const [foundUser, setfoundUser] = useState<User | null>(null);
  const [open, setOpen] = React.useState(false);
  const [foundUsers, setfoundUsers] = useState<UserSearchResultItem[]>([]);
  const [defaultuser, setdefaultuser] = useState("");
  const [image, setimage] = useState("");

  useEffect(() => {
    const load = async (accessToken: string) => {
      /**
       *
       * Retrieve a collection of person objects ordered by their relevance to the user, which is determined by the user's communication and collaboration patterns, and business relationships.
       *
       * https://learn.microsoft.com/en-us/graph/api/user-list-people?view=graph-rest-1.0&tabs=http
       */
      const searchRequestResult = await https<User>(
        accessToken,
        "GET",
        `https://graph.microsoft.com/v1.0/users/${defaultuser}`
      );

      if (searchRequestResult.hasError) {
        toast({
          variant: "destructive",
          title: "Error",
          description: searchRequestResult.errorMessage,
        });
        return;
      }

      toast({
        variant: "default",
        title: "Success",
        description: "User found " + searchRequestResult.data?.displayName,
      });
      setfoundUser(searchRequestResult.data ?? null);
      const i = await getImage(defaultuser as string, accessToken);
      setimage(i);
    };

    if (defaultuser && magicbox.session?.accessToken) {
      load(magicbox.session.accessToken);
    } else {
      setimage("");
      setfoundUser(null);
    }
  }, [defaultuser]);

  useEffect(() => {
    setdefaultuser(defaultuserUserPrincipalName ?? "");
  }, [defaultuserUserPrincipalName]);

  useEffect(() => {
    const load = async (accessToken: string) => {
      /**
       *
       * Retrieve a collection of person objects ordered by their relevance to the user, which is determined by the user's communication and collaboration patterns, and business relationships.
       *
       * https://learn.microsoft.com/en-us/graph/api/user-list-people?view=graph-rest-1.0&tabs=http
       */
      const searchRequestResult = await https<oData<UserSearchResultItem>>(
        accessToken,
        "GET",
        `https://graph.microsoft.com/v1.0/me/people/?$filter=personType/subclass eq 'OrganizationUser'&$search=${searchFor}&$top=20`
      );

      if (searchRequestResult.hasError) {
        toast({
          variant: "destructive",
          title: "Error",
          description: searchRequestResult.errorMessage,
        });
        return;
      }

      if (searchRequestResult.data)
        setfoundUsers(searchRequestResult.data.value);
    };
    if (magicbox.session?.accessToken && searchFor.length > 0) {
      load(magicbox.session?.accessToken);
    } else {
      setfoundUsers([]);
    }
  }, [magicbox.session?.accessToken, searchFor]);

  return (
    <div>
      <div>
        <Button
          type="button"
          variant="outline"
          className={cn(
            "relative w-full justify-start text-sm text-muted-foreground"
          )}
          onClick={() => setOpen(true)}
        >
          <div className="flex w-full items-center ">
            <div className="pr-2">
              <Avatar className="h-6 w-6 ">
                <AvatarImage src={image} alt={"Image of selected user"} />
                <AvatarFallback>
                  <AvatarImage
                    src="/avatars/01.png"
                    alt={"Image of selected user"}
                  />
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="flex text-ellipsis whitespace-nowrap ">
              <div className="hidden  lg:inline-flex">
                {foundUser ? foundUser.displayName : "Search users..."}
              </div>
              <div className="inline-flex text-ellipsis whitespace-nowrap lg:hidden ">
                {foundUser ? foundUser.displayName : "Search ..."}
              </div>
            </div>
            <div className="grow"></div>
            <ChevronDownIcon />
          </div>
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <Command>
            <Input
              placeholder="Search for users..."
              onChange={(e) => setsearchFor(e.target.value)}
              defaultValue={searchFor}
            />

            <CommandEmpty>No users found.</CommandEmpty>
            <CommandList>
              <CommandGroup heading="Results">
                {foundUsers?.map((user: UserSearchResultItem, key) => (
                  <CommandItem
                    key={key}
                    value={user.id}
                    className="cursor-pointer"
                    onSelect={(value) => {
                      onSelectUser(user);
                      // setsearchFor("")
                      setdefaultuser(user.userPrincipalName);
                      setOpen(false);
                    }}
                  >
                    <ShowUser onSelectUser={onSelectUser} user={user} />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
            <CommandGroup>
              <CommandItem
                className="cursor-pointer"
                onSelect={(value) => {
                  onSelectUser(null);
                  setOpen(false);
                  setdefaultuser("");
                }}
              >
                Clear
              </CommandItem>
            </CommandGroup>
          </Command>
        </CommandDialog>
      </div>
    </div>
  );
}
