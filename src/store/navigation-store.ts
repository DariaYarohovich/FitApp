import { observable } from "mobx";

export type NavigationType = {
  title: string;
  path: string;
  active: boolean;
};

export const navigation: NavigationType[] = observable([
  {
    title: "home",
    path: "home",
    active: true,
  },
  {
    title: "plans",
    path: "plans",
    active: false,
  },
]);
