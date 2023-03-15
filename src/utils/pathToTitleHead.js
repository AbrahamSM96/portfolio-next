export const pathToTitleHead = (PATH) => {
  const PATHS = {
    "/": "Abraham Serrano Montiel",
    "/skills": "Skills",
    "/projects": "Projects",
    "/about": "About",
  };

  const SUBTITLE = {
    "/": "Frontend Developer",
    "/skills": "Abraham Serrano Montiel",
    "/projects": "Abraham Serrano Montiel",
    "/about": "Abraham Serrano Montiel",
  };
  const PATH_DEFAULT = "/";
  const PATH_TITLE = PATHS[PATH] || PATH_DEFAULT;
  const PATH_NOW_SUBTITLE = SUBTITLE[PATH] || PATH_DEFAULT;
  return { PATH_TITLE, PATH_NOW_SUBTITLE };
};
