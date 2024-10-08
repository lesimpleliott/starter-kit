const { askProjectName } = require("./features/askProjectName");
const { createFolder } = require("./features/createFolder");
const { updatePackageJson } = require("./utils/updatePackageJSON");
const { addStore } = require("./features/addStore");
const { addStyle } = require("./features/addStyle");
const { addMultilingual } = require("./features/addMultilingual");
const { openProject } = require("./features/openProject");

async function createProject() {
  try {
    // Création du projet
    const { projectName, projectPath } = await askProjectName(); // nom du projet et chemin
    createFolder(projectPath); // Créer le dossier du projet
    updatePackageJson(projectPath, { projectName: projectName }); // Mettre à jour le nom dans le package.json

    // Ajout d'un framework CSS
    await addStyle(projectPath);
    // Ajout d'un store
    await addStore(projectPath);
    // Ajout de la gestion multilingue
    await addMultilingual(projectPath);
    // Ouvrir le projet
    await openProject(projectPath);

    // Afficher un message de succès
    console.log("");
    console.log(`🚀 Le projet '${projectPath}' a été créé avec succès !`);
  } catch (error) {
    console.error(
      "❌ Une erreur s'est produite lors de la création du projet:",
      error
    );
  }
}

createProject();
