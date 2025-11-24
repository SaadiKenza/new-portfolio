'use server'

import { revalidatePath } from 'next/cache'

// 1. Structure de données mise à jour avec un ID
// On utilise 'let' pour pouvoir modifier le tableau (supprimer des éléments)
let projects = [
  {
    id: 1, // Ajout d'un ID unique
    title: "Démineur",
    employer: "Projet scolaire",
    description: "Langage: Python avec utilisation de Pygame"
  },
  {
    id: 2,
    title: "Chess DB",
    employer: "Projet scolaire",
    description: "Langage: C# avec l'utilisation d'Avalonia UI et SQLite"
  }
];

export async function getProjects() {
  return projects;
}

export async function createProject(formData: FormData) {
  const title = formData.get('title');
  const employer = formData.get('employer');
  const description = formData.get('description');

  if (!title || !employer || !description) return;

  // Création
  projects.push({
    id: Date.now(), // On génère un ID unique basé sur l'heure
    title: String(title),
    employer: String(employer),
    description: String(description),
  });

  revalidatePath('/projets'); 
}

// 4. NOUVEAU : Fonction pour supprimer un projet
export async function deleteProject(id: number) {
  // On garde tous les projets dont l'ID est DIFFÉRENT de celui qu'on veut supprimer
  projects = projects.filter(project => project.id !== id);
  
  revalidatePath('/projets');
}