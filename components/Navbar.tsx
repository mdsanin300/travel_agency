import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ModeToggle } from "./ModeToggle"
import { TextAlignJustify } from "lucide-react"
import Link from "next/link"

import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'], // choose weights
  display: 'swap',
})

import { links } from "@/lib/links"

export default function Navbar() {
  return (
    <nav className="w-full flex justify-around items-center top-0 left-0 backdrop-blur-md bg-blend-color shadow-md py-1.5 fixed z-10">
      <DropdownMenu>
        <DropdownMenuTrigger className="p-1.5 backdrop-blur-lg bg-blend-color hover:bg-white/40 transition-colors duration-300 rounded-sm">
          <TextAlignJustify />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {links.map((link, index) => (
          <DropdownMenuItem key={index}>
              <Link href={link.href}>{link.name}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <h1 className={`justify-center font-semibold text-xl ${roboto.className}`}>Travel Agency</h1>
      <ModeToggle />
    </nav>
  )
}
