import { z } from "zod";
import { Hono } from "hono";
import { verifyAuth } from "@hono/auth-js";
import { zValidator } from "@hono/zod-validator";

import { replicate } from "@/lib/replicate";

const app = new Hono()
  .post(
    "/remove-bg",
    //verifyAuth(),
    zValidator(
      "json",
      z.object({
        image: z.string(),
      }),
    ),
    async (c) => {
      const { image } = c.req.valid("json");

      const input = {
        image: image
      };
    
      const output: unknown = await replicate.run("cjwbw/rembg:fb8af171cfa1616ddcf1242c093f9c46bcada5ad4cf6f2fbe8b81b330ec5c003", { input });

      const res = output as string;

      return c.json({ data: res });
    },
  )
  .post(
    "/generate-image",
    //verifyAuth(),
    zValidator(
      "json",
      z.object({
        prompt: z.string(),
      }),
    ),
    async (c) => {
      const { prompt } = c.req.valid("json");

      const input = {
        hdr: 0,
        image: "https://replicate.delivery/pbxt/LKnw8rSgafZf4IlAVyPhzpX1TpTVcyfRa1saoaoiSfUYZLiL/fermat_app_a_living_room_modern_and_minimalistic_39b5a58a-e05b-4281-ac24-e87435256333-1.webp",
        steps: 8,
        format: "jpg",
        prompt: prompt,
        scheduler: "DDIM",
        creativity: 0.4,
        guess_mode: false,
        resolution: 2560,
        resemblance: 0.85,
        guidance_scale: 0,
        negative_prompt: "Teeth, tooth, open mouth, longbody, lowres, bad anatomy, bad hands, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, mutant",
        lora_details_strength: -0.25,
        lora_sharpness_strength: 0.75
      };
      
      const output = await replicate.run("batouresearch/high-resolution-controlnet-tile:8e6a54d7b2848c48dc741a109d3fb0ea2a7f554eb4becd39a25cc532536ea975", { input });
      
      const res = output as Array<string>;

      return c.json({ data: res });
    },
  );

export default app;
