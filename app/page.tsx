import { DatePicker } from "@/components/date-picker";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { CircleDollarSign, Star, TicketsPlane } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-amber-50 dark:bg-gray-900 grid grid-rows-6">
        <div
          id="cover_page"
          className="bg-[url(/pietro-de-grandi-T7K4aEPoGGk-unsplash.jpg)] bg-no-repeat bg-cover row-span-2 bg-center flex justify-center items-end"
        >
          <section className="h-2/5 w-1/2 relative rounded-2xl bg-blend-color backdrop-blur-md shadow-lg flex justify-center items-center">
            <div className="flex justify-center items-center gap-7">
              <Select>
                <SelectTrigger className="w-[180px] bg-white dark:bg-white dark:hover:bg-white">
                  <SelectValue placeholder="Destination" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="india">India</SelectItem>
                  <SelectItem value="nepal">Nepal</SelectItem>
                  <SelectItem value="bhutan">Bhutan</SelectItem>
                </SelectContent>
              </Select>
              <DatePicker />
              <Select>
                <SelectTrigger className="w-[180px] bg-white dark:bg-white dark:hover:bg-white">
                  <SelectValue placeholder="Travel Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="visa">Visa</SelectItem>
                  <SelectItem value="currency">Currency</SelectItem>
                  <SelectItem value="tourist">Tourist</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </section>
        </div>
        <div className="row-span-1 flex justify-center items-center text-center m-7">
          <div className="font-bold text-lg flex flex-col justify-center items-center mx-10">
            <CircleDollarSign size={100} strokeWidth={1} />
            <span>Perfect budget</span>
          </div>
          <div className="font-bold text-lg flex flex-col justify-center items-center mx-10">
            <Star size={100} strokeWidth={1} />
            <span>Best Rating</span>
          </div>
          <div className="font-bold text-lg flex flex-col justify-center items-center mx-10">
            <TicketsPlane size={100} strokeWidth={1} />
            <span>Hasslefree Travel</span>
          </div>
        </div>

        <section className="row-span-4 w-4/5 mx-auto">
          <Separator />
          <div className="">
            <h1 className="font-medium text-2xl text-center my-5">
              Best Places For travel
            </h1>
          </div>
          <Carousel>
            <CarouselContent>
              <CarouselItem className="basis-1/3">
                <Card className="col-span-1 hover:scale-95 transition-transform duration-150">
                  <CardHeader>
                    <CardTitle >Cox's Bazar</CardTitle>
                    <CardDescription>
                      The world's longest natural sea beach is Cox's Bazar Beach
                      in Bangladesh
                    </CardDescription>
                    <CardAction>
                      <Button variant={'outline'} className="mx-3">Book</Button>
                    </CardAction>
                  </CardHeader>
                  <CardContent className="mb-5">
                    <AspectRatio ratio={16 / 9}>
                      <Image
                        src="/cox.jpg"
                        alt="Image"
                        className="rounded-md object-cover"
                        width={400}
                        height={100}
                      />
                    </AspectRatio>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <Card className="col-span-1 hover:scale-95 transition-transform duration-150">
                  <CardHeader>
                    <CardTitle >Cox's Bazar</CardTitle>
                    <CardDescription>
                      The world's longest natural sea beach is Cox's Bazar Beach
                      in Bangladesh
                    </CardDescription>
                    <CardAction>
                      <Button variant={'outline'} className="mx-3">Book</Button>
                    </CardAction>
                  </CardHeader>
                  <CardContent className="mb-5">
                    <AspectRatio ratio={16 / 9}>
                      <Image
                        src="/cox.jpg"
                        alt="Image"
                        className="rounded-md object-cover"
                        width={400}
                        height={100}
                      />
                    </AspectRatio>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <Card className="col-span-1 hover:scale-95 transition-transform duration-150">
                  <CardHeader>
                    <CardTitle >Cox's Bazar</CardTitle>
                    <CardDescription>
                      The world's longest natural sea beach is Cox's Bazar Beach
                      in Bangladesh
                    </CardDescription>
                    <CardAction>
                      <Button variant={'outline'} className="mx-3">Book</Button>
                    </CardAction>
                  </CardHeader>
                  <CardContent className="mb-5">
                    <AspectRatio ratio={16 / 9}>
                      <Image
                        src="/cox.jpg"
                        alt="Image"
                        className="rounded-md object-cover"
                        width={400}
                        height={100}
                      />
                    </AspectRatio>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <Card className="col-span-1 hover:scale-95 transition-transform duration-150">
                  <CardHeader>
                    <CardTitle >Cox's Bazar</CardTitle>
                    <CardDescription>
                      The world's longest natural sea beach is Cox's Bazar Beach
                      in Bangladesh
                    </CardDescription>
                    <CardAction>
                      <Button variant={'outline'} className="mx-3">Book</Button>
                    </CardAction>
                  </CardHeader>
                  <CardContent className="mb-5">
                    <AspectRatio ratio={16 / 9}>
                      <Image
                        src="/cox.jpg"
                        alt="Image"
                        className="rounded-md object-cover"
                        width={400}
                        height={100}
                      />
                    </AspectRatio>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <Card className="col-span-1 hover:scale-95 transition-transform duration-150">
                  <CardHeader>
                    <CardTitle >Cox's Bazar</CardTitle>
                    <CardDescription>
                      The world's longest natural sea beach is Cox's Bazar Beach
                      in Bangladesh
                    </CardDescription>
                    <CardAction>
                      <Button variant={'outline'} className="mx-3">Book</Button>
                    </CardAction>
                  </CardHeader>
                  <CardContent className="mb-5">
                    <AspectRatio ratio={16 / 9}>
                      <Image
                        src="/cox.jpg"
                        alt="Image"
                        className="rounded-md object-cover"
                        width={400}
                        height={100}
                      />
                    </AspectRatio>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      </section>
      <div className=" w-2/3 h-full mx-auto text-center p-10 flex items-center jusf">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="flex justify-center items-center">
              <Image
                src="/undraw_beach-day_cnsv.svg"
                alt="Image"
                className="rounded-md object-cover"
                width={400}
                height={300}
              />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
                doloribus doloremque sequi facilis aliquid dolor quos minima
                laborum eveniet iste, velit placeat excepturi ab facere tempore
                voluptatum, ullam libero consequuntur.
              </p>
            </CarouselItem>
            <CarouselItem className="flex justify-center items-center">
              <Image
                src="/undraw_adventure-map_3e4p.svg"
                alt="Image"
                className="rounded-md object-cover"
                width={500}
                height={500}
              />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
                doloribus doloremque sequi facilis aliquid dolor quos minima
                laborum eveniet iste, velit placeat excepturi ab facere tempore
                voluptatum, ullam libero consequuntur.
              </p>
            </CarouselItem>
            <CarouselItem className="flex justify-center items-center">
              <Image
                src="/undraw_trip_rh66.svg"
                alt="Image"
                className="rounded-md object-cover"
                width={400}
                height={500}
              />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
                doloribus doloremque sequi facilis aliquid dolor quos minima
                laborum eveniet iste, velit placeat excepturi ab facere tempore
                voluptatum, ullam libero consequuntur.
              </p>
            </CarouselItem>
            <CarouselItem className="flex justify-center items-center">
              <Image
                src="/undraw_camping_1hz9.svg"
                alt="Image"
                className="rounded-md object-cover"
                width={400}
                height={500}
              />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
                doloribus doloremque sequi facilis aliquid dolor quos minima
                laborum eveniet iste, velit placeat excepturi ab facere tempore
                voluptatum, ullam libero consequuntur.
              </p>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <Footer />
    </>
  );
}
