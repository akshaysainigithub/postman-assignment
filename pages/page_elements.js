module.exports = {

  // home page elements
  signInLink: '[data-test="desktop-sign-in-link"]',

  // login page elements
  inputEmail: 'input[id="username"]',
  inputPassword: 'input[id="password"]',
  loginButton: 'button[type=submit]',

  // All workspaces page
  createWorkspaceButton: 'button[class="pm-btn pm-btn-primary pm-btn-sm pm-btn-content workspace-list__create visible-desktop-block"]',
  allWorkspaceLabel: 'span[class="text text-heading-h1"]',
  workspaceNameInList: 'a[title="test-postman2"]',
  ellipsisWorkspace: '/html/body/div[2]/main/div/div/div[2]/div/div[1]/div[2]/div[2]/div/div[2]/div/div/div/button',
  workspaceRename: '/html/body/div[4]/div/div[3]/div',
  workspaceDelete: '/html/body/div[4]/div/div[6]/div',
  workspaceDeleteConfirm: '/html/body/div[3]/div/div/div/div/div[2]/button[2]',

  // Create and edit workspace page form
  inputWorkspaceTitle: 'input[label="Name"]',
  inputDescription: 'textarea[class="pm-form-control pm-form-control-undefined"]',
  workspaceTypeMessage: 'p[class="workspace-edit__info"]',
  createWorkspace: 'button[class="pm-btn pm-btn-primary pm-btn-md pm-btn-content pm-actions__confirm"]',
  successMessage: 'h4[class="pm-h4 pm-toast-title"]',
  apiListTitle: 'h3[class="pm-h3 empty-state__title"]',
  editWorkspaceTitle: '/html/body/div[2]/main/div/h2',
  workspaceNameInHeader: 'span[class="pm-ws-switcher__ws-name"]',
  workspaceDropdown: 'button[class="pm-btn pm-btn-header pm-btn-sm pm-btn-icon pm-ws-switcher__menu-button push-half--right"]',
  allWorkspaceLink: 'a[class="pm-link pm-link--manage-workspace"]',
  saveChangesButton: 'button[class="pm-btn pm-btn-primary pm-btn-md pm-btn-content pm-actions__confirm"]'
}