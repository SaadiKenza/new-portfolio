// db/schema.ts
import { pgTable, text, uuid } from 'drizzle-orm/pg-core';

// On change 'projects' en 'projects_table' (ou ce que vous voulez)
// Cela force la création d'une nouvelle table vide et propre
export const ProjectsTable = pgTable('projects', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: text('title').notNull(),
  employer: text('employer').notNull(),
  description: text('description').notNull(),
});