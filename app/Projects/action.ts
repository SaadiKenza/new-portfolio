'use server'

import { db } from '@/db'
import { ProjectsTable } from '@/db/schema' 
import { eq } from 'drizzle-orm'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export async function getProjects() {
  return await db.select().from(ProjectsTable);
}

export async function createProject(formData: FormData) {
  const title = formData.get('title');
  const employer = formData.get('employer');
  const description = formData.get('description');

  if (!title || !employer || !description) return;

  await db.insert(ProjectsTable).values({
    title: String(title),
    employer: String(employer),
    description: String(description),
  });
  redirect((await headers()).get('referer')??'/')
}

export async function editProject(form: FormData) {
  const id = form.get('id');
  if (!id) return;

  await db
    .update(ProjectsTable)
    .set({
      title: String(form.get('title')),
      employer: String(form.get('employer')),
      description: String(form.get('description')),
    })
    .where(eq(ProjectsTable.id, String(id)));
  redirect((await headers()).get('referer')??'/');
}

export async function deleteProject(id: string) {
  await db.delete(ProjectsTable).where(eq(ProjectsTable.id, id));
  redirect((await headers()).get('referer')??'/')
}