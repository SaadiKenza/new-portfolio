// tailwind.config.js

module.exports = {
  /**
   * IMPORTANT : Indiquez ici les fichiers où Tailwind doit chercher les classes.
   * C'est l'étape la plus importante.
   */
  content: [
    './src/**/*.{html,js}', // Si vos fichiers sont dans un dossier "src"
    './index.html',         // Si vous avez un index.html à la racine
    './public/**/*.{html,js}', // Ou s'ils sont dans "public"
    './**/*.{html,js,tsx}',
    // Ajoutez tous les chemins pertinents pour VOTRE projet
  ],

  theme: {
    extend: {
      // C'est ici que nous ajoutons votre couleur
      colors: {
        'custom1': '#4A3B3B',
      },
    },
  },

  plugins: [],
}