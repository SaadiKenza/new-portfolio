import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

// C'est cette ligne qui charge les variables d'environnement pour Drizzle
dotenv.config();

export default defineConfig({
  // Vérifiez que ce chemin pointe bien vers votre fichier schema.ts
  schema: "./db/schema.ts", 
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    // Le '!' dit à TypeScript "T'inquiète, je te promets que ça existe"
    url: process.env.DATABASE_URL!, 
  },
});