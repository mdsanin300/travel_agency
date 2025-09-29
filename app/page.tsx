import { DatePicker } from "@/components/date-picker";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-amber-50 dark:bg-gray-900 grid grid-rows-7">
        <div id="cover_page" className="bg-[url(/pietro-de-grandi-T7K4aEPoGGk-unsplash.jpg)] bg-no-repeat bg-cover row-span-3 bg-center flex justify-center items-end">
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
        <div className="row-span-4 w-1/2 h-full mx-auto text-center p-10 flex items-center jusf">
          <Carousel>
            <CarouselContent>
              <CarouselItem>Hello</CarouselItem>
              <CarouselItem>World</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      <Footer />
    </>
  );
}
