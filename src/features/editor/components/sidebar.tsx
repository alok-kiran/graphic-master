"use client";
import { 
  LayoutTemplate,
  ImageIcon,
  Pencil,
  Settings,
  Shapes,
  Sparkles,
  Type,
} from "lucide-react";
import { SidebarItem } from "./sidebar-item";

export const Sidebar = () => {
  return (
    <aside className="bg-white flex flex-col w-[100px] h-full border-r overflow-y-auto">
      <ul className="flex flex-col">
      <SidebarItem
          icon={LayoutTemplate}
          label="Design"
          isActive={true}
          onClick={() => {}}
        />
           <SidebarItem
          icon={ImageIcon}
          label="Image"
          isActive={false}
          onClick={() => {}}
        />
        <SidebarItem
          icon={Type}
          label="Text"
          isActive={false}
          onClick={() => {}}
        />
        <SidebarItem
          icon={Shapes}
          label="Shapes"
          isActive={false}
          onClick={() => {}}
        />
        <SidebarItem
          icon={Pencil}
          label="Draw"
          isActive={false}
          onClick={() => {}}
        />
        <SidebarItem
          icon={Sparkles}
          label="AI"
          isActive={false}
          onClick={() => {}}
        />
        <SidebarItem
          icon={Settings}
          label="Settings"
          isActive={false}
          onClick={() =>{}}
        />
      </ul>
    </aside>
  );
};
