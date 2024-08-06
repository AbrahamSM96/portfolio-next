import Link from "next/link";

const ENTRY_LINK_POINTS = [
  {
    title: "About me",
    href: "/about",
    hover_opacity: 0.5,
  },
  {
    title: "Experience",
    href: "/experience",
    hover_opacity: 0.5,
  },
  {
    title: "Skills",
    href: "/skills",
    hover_opacity: 0.5,
  },
  {
    title: "Projects",
    href: "/projects",
    hover_opacity: 0.5,
  },
];

export default function LinkProjectsHome({
  primaryColor,
  setPrimaryColor,
  colorsRandom,
}) {
  const colorRandom = colorsRandom();

  const mouseEnter = () => {
    setPrimaryColor(colorRandom.toString());
  };

  const link_entries = ENTRY_LINK_POINTS.map((entry, index) => {
    return (
      <Link
        key={`${entry.title}-${index}`}
        href={entry.href}
        onMouseEnter={mouseEnter}
        style={{
          "--hover-color": primaryColor,
          "--hover-opacity": entry.hover_opacity,
        }}
      >
        {entry.title}
      </Link>
    );
  });

  return link_entries;
}
