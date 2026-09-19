import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { getServerConfig } from "../config.server";

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  company: z.string().trim().min(1).max(150),
  project: z.string().min(1).max(150),
  model: z.string().min(1).max(150),
  desc: z.string().trim().min(10).max(2000),
  deadline: z.string().trim().max(120).optional(),
});

const escapeHtml = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );

// Sends the /contact form to the Ogensys inbox via Resend's HTTP API
// (SMTP isn't available on Cloudflare Workers).
export const sendContactEmail = createServerFn({ method: "POST" })
  .inputValidator(contactSchema)
  .handler(async ({ data }) => {
    const { resendApiKey, contactFrom, contactTo } = getServerConfig();
    if (!resendApiKey) throw new Error("RESEND_API_KEY is not set");

    const fields: [string, string][] = [
      ["Nom", data.name],
      ["Email", data.email],
      ["Entreprise", data.company],
      ["Type de projet", data.project],
      ["Modèle", data.model],
      ["Échéance", data.deadline || "—"],
      ["Description", data.desc],
    ];
    const html = fields
      .map(([k, v]) => `<p><strong>${k} :</strong> ${escapeHtml(v).replace(/\n/g, "<br>")}</p>`)
      .join("");
    const text = fields.map(([k, v]) => `${k} : ${v}`).join("\n");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: contactFrom,
        to: [contactTo],
        reply_to: data.email,
        subject: `Demande de devis — ${data.company}`,
        html,
        text,
      }),
    });

    if (!res.ok) {
      console.error(`Resend error ${res.status}: ${await res.text()}`);
      throw new Error("Email sending failed");
    }
    return { ok: true };
  });
