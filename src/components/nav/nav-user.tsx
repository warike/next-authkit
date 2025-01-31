"use client"

import {
  
  ChevronsUpDown,
  LogOut,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

import { get, head } from 'lodash'
import { useAuth } from "../context/AuthContext"

export function NavUser() {
  const { session: { user }, signOut } = useAuth()
  const { isMobile } = useSidebar()
    const data = {
      name: get(user, "firstName", "")!,
      email: get(user, "email", ""),
      avatar: get(user,"profilePictureUrl", "")!
    }
  const prefix = head(data.name)


  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={data.avatar} alt={data.name} className=""/>
                <AvatarFallback className="rounded-lg">{prefix}</AvatarFallback>
              </Avatar>
              <div className="hidden sm:grid flex-1 text-left text-xs leading-tight">
                <span className="truncate font-semibold">{data.name}</span>
                <span className="truncate text-xs">{data.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "bottom"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuItem onClick={()=>signOut()}>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
