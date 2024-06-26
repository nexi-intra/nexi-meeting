"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { z } from "zod";

const orderSchema = z.object({
  deliveryDate: z.string().nonempty({ message: "Delivery date is required" }),
  deliveryTime: z.string().nonempty({ message: "Delivery time is required" }),
  location: z.string().nonempty({ message: "Delivery location is required" }),
  department: z.string().nonempty({ message: "Department is required" }),
  menu: z.array(
    z.object({
      name: z.string(),
      note: z.string().optional(),
      price: z.number(),
      quantity: z.number().optional(),
    })
  ),
  generalNote: z.string().optional(),
});

type OrderFormValues = z.infer<typeof orderSchema>;

export function OrderForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<OrderFormValues>({
    resolver: zodResolver(orderSchema),
  });

  const onSubmit: SubmitHandler<OrderFormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-8">
      {/* Delivery Date */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="delivery-date">Delivery Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Input
                id="delivery-date"
                type="text"
                placeholder="Select a date"
                className="cursor-pointer"
                {...register("deliveryDate")}
              />
            </PopoverTrigger>
            <PopoverContent className="p-0 max-w-[276px]">
              <Calendar />
            </PopoverContent>
          </Popover>
          {errors.deliveryDate && <p>{errors.deliveryDate.message}</p>}
        </div>

        {/* Delivery Time */}
        <div>
          <Label htmlFor="delivery-time">Delivery Time</Label>
          <Select {...register("deliveryTime")}>
            <SelectTrigger>
              <SelectValue placeholder="Select a time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="8:00 AM">8:00 AM</SelectItem>
              <SelectItem value="9:00 AM">9:00 AM</SelectItem>
              <SelectItem value="10:00 AM">10:00 AM</SelectItem>
              <SelectItem value="11:00 AM">11:00 AM</SelectItem>
              <SelectItem value="12:00 PM">12:00 PM</SelectItem>
              <SelectItem value="1:00 PM">1:00 PM</SelectItem>
              <SelectItem value="2:00 PM">2:00 PM</SelectItem>
              <SelectItem value="3:00 PM">3:00 PM</SelectItem>
            </SelectContent>
          </Select>
          {errors.deliveryTime && <p>{errors.deliveryTime.message}</p>}
        </div>
      </div>

      {/* Delivery Location and Department */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="location">Delivery Location</Label>
          <Select {...register("location")}>
            <SelectTrigger>
              <SelectValue placeholder="Select a location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="meeting-room-1">Meeting Room 1</SelectItem>
              <SelectItem value="meeting-room-2">Meeting Room 2</SelectItem>
              <SelectItem value="meeting-room-3">Meeting Room 3</SelectItem>
              <SelectItem value="pickup">Pickup</SelectItem>
            </SelectContent>
          </Select>
          {errors.location && <p>{errors.location.message}</p>}
        </div>

        <div>
          <Label htmlFor="department">Department</Label>
          <Select {...register("department")}>
            <SelectTrigger>
              <SelectValue placeholder="Select a department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="hr">HR</SelectItem>
              <SelectItem value="it">IT</SelectItem>
            </SelectContent>
          </Select>
          {errors.department && <p>{errors.department.message}</p>}
        </div>
      </div>

      {/* Menu Items */}
      <div>
        <Label>Menu</Label>
        <div className="grid gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Breakfast</CardTitle>
                <CardDescription>7:00 AM - 11:00 AM</CardDescription>
              </CardHeader>
              <CardContent>
                <MenuItem
                  name="Breakfast Burrito"
                  price={8.99}
                  register={register}
                />
                <MenuItem
                  name="Avocado Toast"
                  price={6.99}
                  register={register}
                />
                <MenuItem
                  name="Fruit Parfait"
                  price={5.99}
                  register={register}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Lunch</CardTitle>
                <CardDescription>11:00 AM - 3:00 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <MenuItem
                  name="Grilled Chicken Salad"
                  price={12.99}
                  register={register}
                />
                <MenuItem
                  name="Veggie Wrap"
                  price={10.99}
                  register={register}
                />
                <MenuItem
                  name="Beef Lasagna"
                  price={14.99}
                  register={register}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* General Note */}
      <div>
        <Label>General Note</Label>
        <Input
          type="text"
          placeholder="Add a general note"
          {...register("generalNote")}
        />
      </div>

      {/* Order Summary */}
      <div>
        <Label>Order Summary</Label>
        <Card>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Breakfast Burrito</h3>
                  <p className="text-sm text-muted-foreground">Quantity: 10</p>
                </div>
                <div className="font-medium">$89.90</div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Grilled Chicken Salad</h3>
                  <p className="text-sm text-muted-foreground">Quantity: 15</p>
                </div>
                <div className="font-medium">$194.85</div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Assorted Cookies</h3>
                  <p className="text-sm text-muted-foreground">Quantity: 20</p>
                </div>
                <div className="font-medium">$79.80</div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="font-medium">Total</div>
                <div className="font-medium">$364.55</div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Delivery Details</p>
                  <p className="text-sm text-muted-foreground">
                    Meeting Room 2 - 10:00 AM
                  </p>
                </div>
                <Button className="ml-auto" type="submit">
                  Place Order
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </form>
  );
}

type MenuItemProps = {
  name: string;
  price: number;
  register: any;
};

const MenuItem: React.FC<MenuItemProps> = ({ name, price, register }) => (
  <div className="flex items-center justify-between">
    <div>
      <h3 className="font-medium">{name}</h3>
      <p className="text-sm text-muted-foreground">Some description here</p>
    </div>
    <div className="font-medium">${price}</div>
    <div>
      <Input
        type="text"
        placeholder="Add a note"
        className="w-32"
        {...register(`menu.${name.replace(" ", "-").toLowerCase()}.note`)}
      />
    </div>
  </div>
);
