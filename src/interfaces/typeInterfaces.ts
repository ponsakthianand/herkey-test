export interface SideMenuItem {
  key: string;
  icon: JSX.Element;
  label: string;
  path: string;
}

export interface breadCrumbItem {
  title: string;
  href?: string
}