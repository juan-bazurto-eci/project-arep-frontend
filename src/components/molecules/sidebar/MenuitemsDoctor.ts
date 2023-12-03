import { uniqueId } from "lodash";
import {
  IconFileDescription,
  IconFileDots,
  IconAperture,
  IconFiles,
  IconEdit,
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

const MenuitemsDoctor: MenuitemsType[] = [
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
    title: "Registrar",
    icon: IconFileDescription,
    href: "/examenes/registrar",
  },
  {
    id: uniqueId(),
    title: "Consultar",
    icon: IconFileDots,
    href: "/examenes/consultar",
  },
  {
    id: uniqueId(),
    title: "Actualizar",
    icon: IconFiles,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Modificar",
    icon: IconEdit,
    href: "/",
  },
];

export default MenuitemsDoctor;
