import { useState } from "react";

export default function PortalModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* <Button onClick={() => setShowModal(true)}>Login</Button>
      {showModal &&
        createPortal(
          <LoginForm onClose={() => setShowModal(false)} />,
          document.body
        )} */}
    </>
  );
}
