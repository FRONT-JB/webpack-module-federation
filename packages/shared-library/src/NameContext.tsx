import React from "react";

const NameContext = React.createContext<string | null>(null);

interface NameProviderProps extends React.PropsWithChildren {
  name: string;
}

const NameProvider: React.FC<NameProviderProps> = ({ name, children }) => {
  return <NameContext.Provider value={name}>{children}</NameContext.Provider>;
};

export { NameContext, NameProvider };
