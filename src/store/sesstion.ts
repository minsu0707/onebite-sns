import type { Session } from "@supabase/supabase-js";
import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";

type State = {
  isLoaded: boolean;
  session: Session | null;
};

const initialState = {
  isLoaded: false,
  session: null,
} as State;

const useSesstionStore = create(
  devtools(
    combine(initialState, (set) => ({
      actions: {
        setSession: (session: Session | null) => {
          set({ session, isLoaded: true });
        },
      },
    })),
    {
      name: "sessionStore",
    },
  ),
);

export const useSession = () => {
  const session = useSesstionStore((store) => store.session);
  return session;
};

export const useIsSessionLoaded = () => {
  const isSessionLoaded = useSesstionStore((store) => store.isLoaded);
  return isSessionLoaded;
};

export const useSetSession = () => {
  const setSession = useSesstionStore((store) => store.actions.setSession);
  return setSession;
};
