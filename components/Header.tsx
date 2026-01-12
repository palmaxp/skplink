import { Button } from "@/components/ui/button";
import Image from "next/image";
import GetStartedButton from "./GetStartedButton";
import logo from "@/public/logo.svg";

export default function Header() {
  return (
    <header className="flex items-center p-2 mt-2 container mx-auto border-none">
      <Image
        src={logo}
        alt="Logo Skplink"
        width={32}
        height={32}
        className="flex"
      />
      <nav className="flex justify-center items-center gap-6">
        <ul>
          <li>Features</li>
          <li>Pricing</li>
        </ul>
      </nav>
      <div className="flex gap-2">
        <Button variant="outline">Login</Button>
        <GetStartedButton />
      </div>
    </header>
  );
}
