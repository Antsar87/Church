export const CompteInformation = {
  title: 'Je crée mon compte',
  inputInformation: [
    { label: 'Prénom', type: 'text', name: 'prenom' },
    { label: 'Nom', type: 'text', name: 'nom' },
    { label: 'Adresse email', type: 'mail', name: 'adresseEmail' },
    { label: 'Mot de passe', type: 'password', name: 'motDePasse' },
    {
      label: 'Confirmation du mot de passe',
      type: 'password',
      name: 'confirmation',
    },
  ],
  check: 'Je m’abonne à la newsletter.',
  buttonContent: 'Créer un compte',
  extraContent:
    'En créant un compte, vous acceptez les Conditions générales et Politique de confidentialité du JCEA .',
  moreContent: 'Déjà membre ?',
  link: { url: '', content: 'Me connecter  ' },
};
