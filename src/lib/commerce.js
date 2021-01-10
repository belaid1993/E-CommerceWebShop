import Commerce from '@chec/commerce.js';
//l'objet represente le store qu'on a creer dans le site e-commerce il prend comme paramétre
//un api qu'on a stoquer dans le fichier (.env).
export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);