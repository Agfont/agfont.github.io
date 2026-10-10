import type { CollectionEntry } from 'astro:content';
import { flattenTechnologies } from './technologies';

/** The subset of a work entry needed by the cards and the client-side filter. */
export type WorkItem = {
  id: string;
  title: string;
  description: string;
  fields: string[];
  technologies: string[];
  date: number;
  order?: number;
};

export type WorkSort = 'relevance' | 'date-desc' | 'date-asc' | 'name-asc' | 'name-desc';

export function toWorkItem({ id, data }: CollectionEntry<'work'>): WorkItem {
  return {
    id,
    title: data.title,
    description: data.description,
    fields: data.fields,
    technologies: flattenTechnologies(data.technologies),
    date: data.date.getTime(),
    order: data.order,
  };
}

/** Returns a sorted copy. "relevance" uses `order` (lower first), then newest first. */
export function sortWork(items: WorkItem[], sort: WorkSort): WorkItem[] {
  const order = (i: WorkItem) => i.order ?? Number.MAX_SAFE_INTEGER;
  return [...items].sort((a, b) => {
    switch (sort) {
      case 'date-desc': return b.date - a.date;
      case 'date-asc': return a.date - b.date;
      case 'name-asc': return a.title.localeCompare(b.title);
      case 'name-desc': return b.title.localeCompare(a.title);
      default: return order(a) - order(b) || b.date - a.date;
    }
  });
}
