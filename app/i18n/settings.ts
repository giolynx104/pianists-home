export const fallbackLanguage = "en";
export const languages = [fallbackLanguage, "vi"];
export const defaultNS = "translation";
export const cookieName = "i18next";
export function getOptions(
  lng = fallbackLanguage,
  ns: string | string[] = defaultNS
) {
  return {
    // debug: true,
    supportedLngs: languages,
    // preload: languages,
    fallbackLanguage,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
    // backend: {
    //   projectId: '01b2e5e8-6243-47d1-b36f-963dbb8bcae3'
    // }
  };
}
