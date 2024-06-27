"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xgUpJQE3hhD
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
export interface MenuCardItem {
  name: string;
  price: number;
  description: string;
}
export interface MenuCardProps {
  onAddToOrder: (item: MenuCardItem) => void;
}

export default function MenuCard(props: MenuCardProps) {
  return (
    <div className="w-full py-12 overflow-scroll h-full">
      <div className="container max-w-5xl mx-auto">
        <div className="grid gap-8">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">Breakfast</h2>
              <p className="text-muted-foreground">Served until 11 AM</p>
            </div>
            <p className="mt-2 text-muted-foreground">
              Start your day off right with our delicious breakfast options.
              From classic favorites to unique creations, we&apos;ve got
              something for everyone.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              <div className="group relative rounded-lg overflow-hidden shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                <img
                  src="https://t4.ftcdn.net/jpg/01/80/23/57/360_F_180235724_re7asm0odpdBIJDRz5LSNkjtUr6aZUXG.jpg"
                  alt="Breakfast Item 1"
                  width={500}
                  height={300}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 bg-background">
                  <h3 className="text-lg font-semibold">Classic Breakfast</h3>
                  <p className="text-sm text-muted-foreground">
                    Two eggs, bacon, toast, and hash browns.
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-semibold">$9.99</span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        props.onAddToOrder({
                          name: "Classic Breakfast",
                          price: 9.99,
                          description:
                            "Two eggs, bacon, toast, and hash browns.",
                        });
                      }}
                    >
                      Add to Order
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">Lunch/Dinner</h2>
              <p className="text-muted-foreground">
                Served from 11 AM to 10 PM
              </p>
            </div>
            <p className="mt-2 text-muted-foreground">
              Enjoy our delectable lunch and dinner options, featuring a variety
              of mouthwatering dishes to satisfy any craving.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              <div className="group relative rounded-lg overflow-hidden shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                <img
                  src="https://t3.ftcdn.net/jpg/01/79/21/40/360_F_179214068_UdfEG0nqKHPpwlEEqq1F4ncHYj8ERAum.jpg"
                  alt="Lunch/Dinner Item 1"
                  width={500}
                  height={300}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 bg-background">
                  <h3 className="text-lg font-semibold">Classic Burger</h3>
                  <p className="text-sm text-muted-foreground">
                    Juicy beef patty, lettuce, tomato, and onion on a brioche
                    bun.
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-semibold">$12.99</span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        props.onAddToOrder({
                          name: "Classic Burger",
                          price: 12.99,
                          description:
                            "Juicy beef patty, lettuce, tomato, and onion on a brioche bun.",
                        });
                      }}
                    >
                      Add to Order
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">All-Day Delivery</h2>
              <p className="text-muted-foreground">Available 24/7</p>
            </div>
            <p className="mt-2 text-muted-foreground">
              Can&apos;t make it to our restaurant? No problem! Enjoy our
              delicious offerings from the comfort of your home or office with
              our all-day delivery service.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              <div className="group relative rounded-lg overflow-hidden shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNyBSKcC9xCMEXqE5rFgeF8G-KpVQNbyK01Q&s"
                  alt="All-Day Delivery Item 1"
                  width={500}
                  height={300}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 bg-background">
                  <h3 className="text-lg font-semibold">Margherita Pizza</h3>
                  <p className="text-sm text-muted-foreground">
                    Classic tomato sauce, fresh mozzarella, and basil.
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-semibold">$14.99</span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        props.onAddToOrder({
                          name: "Margherita Pizza",
                          price: 14.99,
                          description:
                            "Classic tomato sauce, fresh mozzarella, and basil.",
                        });
                      }}
                    >
                      Add to Order
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
