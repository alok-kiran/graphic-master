import { Context, Hono } from "hono";
import { handle } from "hono/vercel";

export const runtime = "nodejs";

const app = new Hono().basePath("/api");

app.get("/test", (context) => {
    return context.json({ message: "Hello, World!" });
  })

  app.get("/user/:name", (context) => {
    const name = context.req.param("name");
    return context.json({ userName: name });
  })

  export const GET = handle(app);