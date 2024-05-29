export const confirmationQuestions = {
  logOut: {
    title: 'Log Out?',
    content: 'Are you sure you want to log out from your account?',
    options: {cancel: 'Cancel', confirm: 'Log Out'},
    type: 'warning'
  },
  close: {
    title: 'Close?',
    content: 'Are you sure you want to close? ',
    options: {cancel: 'Stay Here', confirm: 'Close'},
    type: 'warning'
  },
  goHome: {
    title: 'Go Home?',
    content: 'Are you sure you want to go to the home page? In such case all changes will be reset 🧹 ',
    options: {cancel: 'Stay Here', confirm: 'Go Home'},
    type: 'warning'
  }
};
