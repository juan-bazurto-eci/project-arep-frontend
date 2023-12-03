import { uniqueId } from "lodash";
import {
  IconFileDescription,
  IconFileDots,
  // IconUserPlus,
  // IconRotate,
  IconAperture,
  // IconZoomCode,
} from "@tabler/icons-react";

interface MenuitemsType {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string;
  children?: MenuitemsType[];
  chip?: string;
  chipColor?: string;
  variant?: string;
  external?: boolean;
}

const Menuitems: MenuitemsType[] = [
  {
    navlabel: true,
    subheader: "Medical Learning",
  },

  {
    id: uniqueId(),
    title: "Inicio",
    icon: IconAperture,
    href: "/dashboard",
  },
  {
    navlabel: true,
    subheader: "Exámenes",
  },
  {
    id: uniqueId(),
    title: "Solicitar",
    icon: IconFileDescription,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Consultar",
    icon: IconFileDots,
    href: "/examenes/consultar",
  },
  // {
  //   navlabel: true,
  //   subheader: "Usuarios",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Registrar",
  //   icon: IconUserPlus,
  //   href: "/usuarios/registrar",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Consultar",
  //   icon: IconZoomCode,
  //   href: "/usuarios/consultar",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Actualizar",
  //   icon: IconRotate,
  //   href: "/usuarios/actualizar",
  // },
];

export default Menuitems;
