import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // navigationMenuTriggerStyle,
} from "./navigation-menu";

import { Link } from "react-router-dom";

export default function HeaderNavBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          {/* <NavigationMenuTrigger className="bg-pers-secondary hover:bg-pers-secondary focus:bg-pers-secondary data-[state=open]:hover:bg-pers-secondary data-[state=open]:bg-pers-secondary/50">Menu</NavigationMenuTrigger> */}
          <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink onClick={() => console.log("Home")}>
              <Link to="/Home">Home</Link>
            </NavigationMenuLink>
            <NavigationMenuLink onClick={() => console.log("Listagem")}>
              <Link to="/Listagem">Listagem</Link>
            </NavigationMenuLink>
            <NavigationMenuLink className="w-32">
              <Link to="/MeusAnuncios">Meus Anúncios</Link>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
