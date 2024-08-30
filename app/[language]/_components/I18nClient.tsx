"use client";

import { createContext } from "react";

export const I18nContext = createContext("en");

export const I18nClient = ({
  language,
  children,
}: {
  language: string;
  children: React.ReactNode;
}) => {
  return (
    <I18nContext.Provider value={language}>{children}</I18nContext.Provider>
  );
};
