import { observable, action, configure } from "mobx";

configure({
  enforceActions: "observed",
});

export type PlanType = {
  id: string;
  title: string;
  length: number;
};

export const plans: PlanType[] = observable([
  {
    id: "testId",
    title: "monthly",
    length: 30,
  },
]);

export const setPlanTitle = action((id: string, newTitle: string) => {
  const planIndex = plans.findIndex((plan) => plan.id === id);

  if (!planIndex) {
    return;
  }

  plans[planIndex].title = newTitle;
});
