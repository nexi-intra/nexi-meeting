"use client";
import { use, useContext, useEffect, useMemo, useState } from "react";
import { DatePicker } from "./DatePicker";
import { TimePicker } from "./TimePicker";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { min, set } from "date-fns";
import { Delete, DeleteIcon, Trash } from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MenuCard, { MenuCardItem } from "./MenuCard";
import {
  addMinutesToMidnight,
  getDayOfWeekInLocalTime,
  getMidnightDate,
  getMinutesSinceMidnightRounded,
  isOrderDateAcceptable,
} from "@/lib/dates";
import { MeetingContext } from "@/app/meeting/contextdefinition";
import PickUser from "./PickUser";
import PickDeliveryPlace from "./PickDeliveryPlace";
import PickCostCentre from "./PickCostCentre";

interface DeliveryItem {
  name: string;
  minute: number;
  description: string;
  items: MenuCardItem[];
}
interface DeliveryItemProps {
  item: DeliveryItem;
  onChange: (item: DeliveryItem) => void;
}
function DeliveryItemForm(props: DeliveryItemProps) {
  const [name, setname] = useState(props.item.name);
  const [minutesFromMidnight, setMinutesFromMidnight] = useState<number>(0);
  const [description, setdescription] = useState(props.item.description);
  const [items, setitems] = useState<MenuCardItem[]>([]);
  useEffect(() => {
    setMinutesFromMidnight(props.item.minute);
  }, [props.item.minute]);

  useEffect(() => {
    setname(props.item.name);
  }, [props.item.name]);

  useEffect(() => {
    if (!name) return;
    if (minutesFromMidnight === 0) return;
    props.onChange({
      name: name,
      minute: minutesFromMidnight,
      description: description,
      items,
    });
  }, [name, minutesFromMidnight, description]);
  useEffect(() => {
    setdescription(props.item.description);
  }, [props.item.description]);

  return (
    <div className="border rounded-xl drop-shadow-sm p-4 space-y-2 w-full bg-slate-200">
      <Input
        type="text"
        value={name}
        placeholder="Name (e.g. Breakfaxt)"
        onChange={(v) => setname(v.target.value)}
      />
      <Input
        type="text"
        placeholder="Comments (e.g. No onions)"
        value={description}
        onChange={(v) => setdescription(v.target.value)}
      />
      Time
      <TimePicker
        minutesFromMidnight={minutesFromMidnight}
        onChange={setMinutesFromMidnight}
      />
      <PickDeliveryPlace />
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="link">Menu card</Button>
        </SheetTrigger>
        <SheetContent className="h-[80vh] overflow-scroll " side="bottom">
          <SheetHeader className="sticky">
            <SheetTitle>Menucard</SheetTitle>
            <SheetDescription>
              Select from the menu card to add to the order
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4 overflow-scroll">
            <MenuCard
              onAddToOrder={(item) => {
                items.push(item);
                setitems([...items]);
                console.log("Added to order", item);
              }}
            />
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export interface OrderData {
  datetime: Date;

  deliveryTimes: DeliveryItem[];
}

export interface OrderFormProps {
  startDateTime: Date;
  endDateTime: Date;
  order: OrderData;
}

function ValidDateTime(props: {
  date: Date | undefined;
  minutesFromMidnight: number;
}) {
  const meetingContext = useContext(MeetingContext);
  const { date, minutesFromMidnight } = props;
  if (date == undefined) return null;
  const dw = getDayOfWeekInLocalTime(date);
  const { isAcceptable, reason } = isOrderDateAcceptable(
    meetingContext.now,
    date
  );

  if (!isAcceptable) return <div className="bg-red-400"> {reason}</div>;
  return null;
}

export function OrderForm(props: OrderFormProps) {
  const [orderDate, setorderDate] = useState<Date>();
  const [minutesFromMidnight, setMinutesFromMidnight] = useState<number>(0);
  const [valid, setvalid] = useState(false);
  const [deliveryTimes, setdeliveryTimes] = useState<DeliveryItem[]>([]);
  const [order, setorder] = useState<OrderData>();
  const meetingContext = useContext(MeetingContext);
  useEffect(() => {
    if (!props.order) return;
    setdeliveryTimes(props.order.deliveryTimes);
    setorderDate(props.order.datetime);
    const minutes = getMinutesSinceMidnightRounded(props.order.datetime);
    setMinutesFromMidnight(minutes);
  }, [props.order]);

  useEffect(() => {
    setvalid(orderDate !== undefined && minutesFromMidnight !== 0);
  }, [orderDate, minutesFromMidnight]);

  useEffect(() => {
    setorderDate(getMidnightDate(props.startDateTime));
    setMinutesFromMidnight(getMinutesSinceMidnightRounded(props.startDateTime));
  }, [props.startDateTime, props.endDateTime]);

  const submitOrder = () => {
    setorder({
      datetime: addMinutesToMidnight(orderDate!, minutesFromMidnight),

      deliveryTimes: deliveryTimes,
    });
    console.log("Order submitted");
  };
  return (
    <div>
      <h1>Order Form</h1>
      <div className="flex space-x-2">
        <DatePicker date={orderDate} setDate={setorderDate} />
        <div className="max-w-32">
          <TimePicker
            minutesFromMidnight={minutesFromMidnight}
            onChange={setMinutesFromMidnight}
          />
        </div>
        <div>
          <ValidDateTime
            date={orderDate}
            minutesFromMidnight={minutesFromMidnight}
          />
        </div>
        <div>
          <PickDeliveryPlace />
        </div>
        {/* <div>
          <PickUser />
        </div> */}
        <div>
          <PickCostCentre />
        </div>
      </div>
      <div>
        {deliveryTimes
          .sort((a, b) => a.minute - b.minute)
          .map((item, index) => (
            <div key={index} className="flex mb-4">
              <div className="grow">
                <DeliveryItemForm
                  item={item}
                  onChange={(item) => {
                    deliveryTimes[index] = item;
                    setdeliveryTimes([...deliveryTimes]);
                  }}
                />
              </div>
              <Button
                variant="ghost"
                onClick={() => {
                  deliveryTimes.splice(index, 1);
                  setdeliveryTimes([...deliveryTimes]);
                }}
              >
                <Trash />
              </Button>
            </div>
          ))}
        <Button
          variant="default"
          onClick={() => {
            deliveryTimes.push({
              name: "",
              minute: minutesFromMidnight,
              description: "",
              items: [],
            });
            setdeliveryTimes([...deliveryTimes]);
          }}
        >
          Add
        </Button>
      </div>
      <pre>
        {JSON.stringify(
          { meetingContext, minutesFromMidnight, order, props },
          null,
          2
        )}
      </pre>
      <Button disabled={!valid} onClick={submitOrder}>
        Submit
      </Button>
    </div>
  );
}
