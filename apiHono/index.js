import { Hono } from "hono";
import { serveStatic } from "hono/serve-static";
import { cors } from "hono/cors";

import about from "../db/about.json";
import contact from "../db/contact.json";
import hero from "../db/hero.json";
import projects from "../db/projects.json";
import skills from "../db/skills.json";
import social from "../db/social.json";

const app = new Hono();

app.use(cors());

app.get("/", (ctx) => {
  return ctx.json([
    {
      endpoint: "/hero",
      description: "Returns the hero",
    },
    {
      endpoint: "/skills",
      description: "Returns the skills",
    },
    {
      endpoint: "/projects",
      description: "Returns the skills",
    },
    {
      endpoint: "/about",
      description: "Returns the skills",
    },
    {
      endpoint: "/contact",
      description: "Returns the skills",
    },
    {
      endpoint: "/social",
      description: "Returns the skills",
    },
  ]);
});

app.get("/hero", (ctx) => {
  return ctx.json(hero);
});
app.get("/skills", (ctx) => {
  return ctx.json(skills);
});
app.get("/projects", (ctx) => {
  return ctx.json(projects);
});
app.get("/about", (ctx) => {
  return ctx.json(about);
});
app.get("/contact", (ctx) => {
  return ctx.json(contact);
});
app.get("/social", (ctx) => {
  return ctx.json(social);
});

app.use("/static/*", serveStatic({ root: "./" }));
// app.get("/", serveStatic({ path: "./static" }));

app.notFound((ctx) => {
  const { pathname } = new URL(ctx.req.url);

  if (ctx.req.url.at(-1) === "/") {
    return ctx.redirect(pathname.slice(0, -1));
  }
  return ctx.json({ message: "Not found" }, 404);
});

export default app;
