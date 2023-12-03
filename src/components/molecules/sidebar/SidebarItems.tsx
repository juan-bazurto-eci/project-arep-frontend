import Menuitems from "./MenuItems";
import { useRouter } from "next/router";
import { Box, List, useMediaQuery } from "@mui/material";
import { AppState, useDispatch, useSelector } from "@/store/Store";
import { toggleMobileSidebar } from "@/store/customizer/CustomizerSlice";
import NavCollapse from "../navbar/NavCollapse";
import NavItem from "../navbar/NavItem";
import NavGroup from "../navbar/NavGroup/NavGroup";
import { arrayDestructuring } from "@/helpers/arrayDestructuring";
import { useAuth } from "@/context/authContext";
import MenuitemsDoctor from "./MenuitemsDoctor";

const SidebarItems = () => {
  const { pathname } = useRouter();
  const pathDirect = pathname;
  const pathWithoutLastPart = pathname.slice(0, pathname.lastIndexOf("/"));
  const customizer = useSelector((state: AppState) => state.customizer);
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));
  const hideMenu: any = lgUp
    ? customizer.isCollapse && !customizer.isSidebarHover
    : "";
  const dispatch = useDispatch();
  const { user } = useAuth();
  const name = user ? arrayDestructuring(user?.email?.split("@"), "") : "";
  return (
    <Box sx={{ px: 3 }}>
      <List sx={{ pt: 0 }} className="sidebarNav">
        {(name === "doctor" ? MenuitemsDoctor : Menuitems).map((item) => {
          // {/********SubHeader**********/}
          if (item.subheader) {
            return (
              <NavGroup item={item} hideMenu={hideMenu} key={item.subheader} />
            );

            // {/********If Sub Menu**********/}
            /* eslint no-else-return: "off" */
          } else if (item.children) {
            return (
              <NavCollapse
                menu={item}
                pathDirect={pathDirect}
                hideMenu={hideMenu}
                pathWithoutLastPart={pathWithoutLastPart}
                level={1}
                key={item.id}
                onClick={() => dispatch(toggleMobileSidebar())}
              />
            );

            // {/********If Sub No Menu**********/}
          } else {
            return (
              <NavItem
                item={item}
                key={item.id}
                pathDirect={pathDirect}
                hideMenu={hideMenu}
                onClick={() => dispatch(toggleMobileSidebar())}
              />
            );
          }
        })}
      </List>
    </Box>
  );
};
export default SidebarItems;
