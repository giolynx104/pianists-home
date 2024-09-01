"use client";

import { LanguageContext } from "./LanguageContext";

export const LanguageClient = ({
  language,
  children,
}: {
  language: string;
  children: React.ReactNode;
}) => {
  return (
    <LanguageContext.Provider value={language}>
      {children}
    </LanguageContext.Provider>
  );
};
