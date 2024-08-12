import { z } from "zod";
import { Hono } from "hono";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import { zValidator } from "@hono/zod-validator";
import { unsplash } from "@/lib/unsplash";

const DEFAULT_COUNT = 6;
const DEFAULT_COLLECTIONS = ["317099"];

// import { db } from "@/db/drizzle";
// import { users } from "@/db/schema";

const app = new Hono()
  .get("/", async (c) => {
    const images = await unsplash.photos.getRandom({
      collectionIds: DEFAULT_COLLECTIONS,
      count: DEFAULT_COUNT,
    });
    if(images.errors) {
      return c.json({
        error: "Something went wrong",
      }, 400);
    }

    let response = images.response;

    if(!Array.isArray(response)) {
      response = [response];
    }

    return c.json({ data: response });
  })
export default app;
