export const nameSections = (title) => {
  const NAME_SECTION_OBJECT = {
    Projects: "TITLE_PROJECTS",
    Skills: "TITLE_SKILLS",
  };
  const RENAME_SECTIONS = NAME_SECTION_OBJECT[title];
  const PATH_PUSH = RENAME_SECTIONS === "TITLE_SKILLS" ? "projects" : "about";

  return { RENAME_SECTIONS, PATH_PUSH };
};
