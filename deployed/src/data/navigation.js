export const links = [
  "Home",
  "About",
  "Expertise",
  "Projects",
  "Experience",
  "Research & Publication",
  "Contact",
];
export const sectionId = (label) =>
  label === "Research & Publication" ? "research" : label.toLowerCase();
