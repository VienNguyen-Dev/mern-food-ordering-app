import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

export default function LoadingButton() {
  return (
    <Button disabled>
      <Loader2 className=" h-4 w-4 mr-2 animate-spin" />
      Loading
    </Button>
  );
}
