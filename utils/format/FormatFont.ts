export const ReplaceInDescription = (description: string | any, font: any) => {
    return description?.replaceAll("Lexend", font);
};

// export const ReplaceInDescription = (description: string | undefined): string | undefined => {
//     return description?.replaceAll("SVN-Cera", "'__cera_init_40b992', '__cera_init_Fallback_40b992'");
// }
