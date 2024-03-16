import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { CircleUserRound, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLink from "./MobileNavLink";

export default function MobileNav() {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className=" text-orange-500" />
      </SheetTrigger>
      <SheetContent className=" space-y-3">
        <SheetTitle>
          {isAuthenticated ? (
            <span className="flex flex-1 gap-2 items-center hover:text-orange-500">
              <CircleUserRound className=" text-orange-500" />
              {user?.email}
            </span>
          ) : (
            <span>Wellcome to VegetarianFood.com!</span>
          )}
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col gap-4">
          {isAuthenticated ? (
            <MobileNavLink />
          ) : (
            <Button onClick={async () => await loginWithRedirect()} className=" font-bold bg-orange-500 flex-1 ">
              Log In
            </Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
