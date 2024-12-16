import { Icons } from "@/components/shared/Icons"

export const MenuItems = {
    navMain: [
      {
        title: "Admin",
        url: "#",
        icon: Icons.command,
        isActive: true,
        items: [
          {
            title: "Users",
            url: {
              pathname: '/dashboard/users'
            },
          },
        ],
      },
    ],
  }