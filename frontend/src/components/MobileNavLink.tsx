import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function MobileNavLink() {
  const { logout } = useAuth0();
  return (
    <>
      <Link to={"/user-profile"} className=" flex font-bold hover:text-orange-500 bg-white text-xl">
        User profile
      </Link>
      <Button onClick={() => logout()} className=" font-bold hover:bg-gray-500 flex items-center px-3 text-xl">
        Log out
      </Button>
    </>
  );
}
