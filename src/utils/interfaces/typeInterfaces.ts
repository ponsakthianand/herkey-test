export interface StateObjects {
  userPersonalData: usersProfileData;
}

export interface SideMenuItem {
  key: string;
  icon: JSX.Element;
  label: string;
  path: string;
}

export interface breadCrumbItem {
  title: string;
  href?: string;
}

export interface usersProfileData {
  name: string;
  avatarLetter: string;
  jobPosition: string;
  about: string;
  telephone: string;
  companyName: string;
  mailSetting: string;
}