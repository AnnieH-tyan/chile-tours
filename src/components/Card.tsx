import type { ReactNode } from "react";

export const Card: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className="bg-cyan-500 shadow-xl m-10 p-10">{children}</div>
);
