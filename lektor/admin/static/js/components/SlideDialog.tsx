import React, { ReactNode, useEffect } from "react";
import { trans } from "../i18n";

export default function SlideDialog({
  title,
  hasCloseButton,
  dismiss,
  children,
}: {
  title: string;
  hasCloseButton: boolean;
  dismiss: () => void;
  children: ReactNode;
}): JSX.Element {
  useEffect(() => {
    const handler = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") {
        ev.preventDefault();
        dismiss();
      }
    };
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [dismiss]);

  return (
    <div className="sliding-panel container">
      <div className="col-md-6 offset-md-3">
        {hasCloseButton && (
          <a
            href="#"
            className="close-btn"
            onClick={(ev) => {
              ev.preventDefault();
              dismiss();
            }}
          >
            {trans("CLOSE")}
          </a>
        )}
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  );
}
