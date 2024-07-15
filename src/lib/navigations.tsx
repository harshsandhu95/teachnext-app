import {
  BadgeCentIcon,
  BrainCircuitIcon,
  HomeIcon,
  ListTodoIcon,
  School2Icon,
} from "lucide-react";

export const dashboardlinks = [
  {
    href: "/dashboard",
    icon: HomeIcon,
    label: "Dashboard",
  },
  {
    href: "/todo",
    icon: ListTodoIcon,
    label: "To do",
  },
  {
    href: "/school",
    icon: School2Icon,
    label: "School",
  },
  {
    href: "/prompt",
    icon: BrainCircuitIcon,
    label: "Prompt",
  },
  {
    href: "/credits",
    icon: BadgeCentIcon,
    label: "Credits",
  },
];
