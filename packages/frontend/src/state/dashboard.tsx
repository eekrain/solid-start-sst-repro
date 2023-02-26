import { createSignal } from "solid-js";

export const useDashboardState = () => {
  const [dashboardOpen, setDashboardOpen] = createSignal(false);

  return [
    { dashboardOpen },
    { toggleSidebar: () => setDashboardOpen((p) => !p) },
  ] as const;
};
