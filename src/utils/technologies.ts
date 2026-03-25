export const TECHNOLOGY_GROUPS: Record<string, string[]> = {
  Language: ['JS/TS', 'Python', 'Ruby'],
  'Web Framework': ['Flask', 'Next.js', 'Rails',],
  APIs: ['Shopify', 'GraphQL', 'Tracking APIs'],
  Frontend: ['Astro', 'React', 'Tailwind CSS'],
  Databases: ['ChromaDB', 'PostgreSQL'],
  DevOps: ['AWS', 'Docker', 'GitHub Actions', 'Kubernetes', 'Terraform'],
  'AI & ML': ['LangChain', 'LangGraph', 'MCP', 'OpenAI', 'PyTorch', 'Scikit-learn'],
  'Data Science': ['Matplotlib', 'NumPy', 'Pandas', 'Seaborn']
};

export const TECHNOLOGY_GROUP_COLORS: Record<string, string> = {
  Language: '#1f6feb',
  APIs: '#b27f08',
  Frontend: '#0f766e',
  'Web Framework': '#7c3aed',
  Databases: '#b45309',
  DevOps: '#be123c',
  'AI & ML': '#166534',
'Data Science': '#054724',
  Other: '#475569'
};

export const TECHNOLOGY_TO_GROUP: Record<string, string> = Object.fromEntries(
  Object.entries(TECHNOLOGY_GROUPS).flatMap(([group, technologies]) =>
    technologies.map((technology) => [technology, group])
  )
);

export function getTechnologyGroup(technology: string): string {
  return TECHNOLOGY_TO_GROUP[technology] || 'Other';
}

export function getTechnologyColor(technology: string): string {
  return TECHNOLOGY_GROUP_COLORS[getTechnologyGroup(technology)];
}
