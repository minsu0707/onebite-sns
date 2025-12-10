import ModalProvider from "./provider/modal-provider";
import SessionProvider from "./provider/SessionProvider";
import RootRoute from "./root-route";

export default function App() {
  return (
    <SessionProvider>
      <ModalProvider>
        <RootRoute />
      </ModalProvider>
    </SessionProvider>
  );
}
