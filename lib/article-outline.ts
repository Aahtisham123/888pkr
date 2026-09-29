import { article, plainText } from "@/content/article";

export type TocItem = {
  id: string;
  text: string;
  children: { id: string; text: string }[];
};

/** H2/H3 outline in document order, derived from the article content only. */
export function getToc(): TocItem[] {
  const a = article;
  const toc: TocItem[] = [
    { id: a.whatIs.id, text: a.whatIs.heading, children: [] },
    {
      id: a.features.id,
      text: a.features.heading,
      children: a.features.items.map((i) => ({ id: i.id, text: i.heading })),
    },
    {
      id: a.categories.id,
      text: a.categories.heading,
      children: a.categories.items.map((i) => ({ id: i.id, text: i.heading })),
    },
    { id: a.safety.id, text: a.safety.heading, children: [] },
    { id: a.choose.id, text: a.choose.heading, children: [] },
    {
      id: a.gettingStarted.id,
      text: a.gettingStarted.heading,
      children: a.gettingStarted.steps.map((s) => ({ id: s.id, text: s.heading })),
    },
    { id: a.agent.id, text: a.agent.heading, children: [] },
    { id: a.prosCons.id, text: a.prosCons.heading, children: [] },
    {
      id: a.experience.id,
      text: a.experience.heading,
      children: [
        { id: a.experience.personal.id, text: a.experience.personal.heading },
        { id: a.experience.testimonials.id, text: a.experience.testimonials.heading },
      ],
    },
    { id: a.gallery.id, text: a.gallery.heading, children: [] },
    { id: a.conclusion.id, text: a.conclusion.heading, children: [] },
    {
      id: a.faqs.id,
      text: a.faqs.heading,
      children: a.faqs.items.map((f) => ({ id: f.id, text: f.question })),
    },
  ];

  const seen = new Set<string>([a.overview.id, a.introduction.id]);
  for (const id of toc.flatMap((t) => [t.id, ...t.children.map((c) => c.id)])) {
    if (seen.has(id)) throw new Error(`Duplicate heading id in article: "${id}"`);
    seen.add(id);
  }

  return toc;
}

function collectText(value: unknown, out: string[]): void {
  if (typeof value === "string") out.push(plainText(value));
  else if (Array.isArray(value)) value.forEach((v) => collectText(v, out));
  else if (value && typeof value === "object") {
    for (const [key, v] of Object.entries(value)) {
      if (key === "id" || key === "icon" || key === "tone") continue;
      collectText(v, out);
    }
  }
}

export function getWordCount(): number {
  const parts: string[] = [];
  collectText(article, parts);
  return parts.join(" ").split(/\s+/).filter(Boolean).length;
}

export function getReadingTimeMinutes(wordsPerMinute = 220): number {
  return Math.max(1, Math.round(getWordCount() / wordsPerMinute));
}
