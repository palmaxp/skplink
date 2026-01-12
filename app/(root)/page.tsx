import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
  InputGroupButton,
} from "@/components/ui/input-group";

export default function Home() {
  return (
    <main>
      <h1 className="font-museo-moderno">Shorten your link</h1>
      <h3 className="text-normal">Shorten your link</h3>
      <div>
        <InputGroup>
          <InputGroupInput placeholder="https://github.com/palmaxp/skplink" />
          <InputGroupAddon align="inline-end">
            <span>Shorten</span>
            <InputGroupButton aria-label="Copy" title="Copy" size="icon-xs">
              <ArrowRight />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </main>
  );
}
