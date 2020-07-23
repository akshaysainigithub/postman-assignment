
// import page elements file to get all the web elements for automation
const pageElements = require('../pages/page_elements.js')

module.exports = {
  // start test    
  'Postman Workspace Test' : function (browser) {

    // name of test postman workspace
    let workspaceName = 'test-postman2';
    let workspaceRename = 'Renamed test-postman2';
    browser

      // begin test case 1 - Create
      // go to postman homepage, verify page loads and click on signin link
      .url('https://www.postman.com')
      .waitForElementVisible('body')
      .assert.titleContains('Postman | The Collaboration Platform for API Development')
      .waitForElementVisible(pageElements.signInLink)
      .click(pageElements.signInLink)
      .pause(5000)
      // adding a test line

      // enter existing user credentials and click on login
      .setValue(pageElements.inputEmail, 'saini.akshay88@gmail.com')
      .setValue(pageElements.inputPassword, 'Password1234')
      .pause(2000)
      .click(pageElements.loginButton)
      .pause(15000)

      // verify that user lands on All Workspaces page, click on create new workspace button
      .waitForElementVisible(pageElements.createWorkspaceButton, 10000)
      .assert.titleContains('All Workspaces')
      .click(pageElements.createWorkspaceButton)
      .pause(5000)

      // on create workspace page form, enter all the input details and submit
      .assert.titleContains('Create Workspace')
      .setValue(pageElements.inputWorkspaceTitle, workspaceName)
      .setValue(pageElements.inputDescription, 'creating a test workspace for postman assignment')
      .assert.containsText(pageElements.workspaceTypeMessage, 'Only you can view this workspace')
      .pause(2000)
      .click(pageElements.createWorkspace)
      .assert.containsText(pageElements.apiListTitle, 'No APIs yet')
      .assert.containsText(pageElements.successMessage, 'Personal workspace created')
      .pause(5000)

      // verify success message
      .assert.containsText(pageElements.workspaceNameInHeader, workspaceName)

      // begin test case 2 - Read
      // go to all workspaces from header
      .click(pageElements.workspaceDropdown)
      .pause(1000)
      .click(pageElements.allWorkspaceLink)
      .pause(5000)

      // verify that user has come back to all workspaces and new workspace is in the list
      .assert.containsText(pageElements.allWorkspaceLabel, 'All Workspaces')
      .assert.elementPresent('a[title="' + workspaceName + '"]')

      // begin test case 3 - Update
      // click on ellipsis next to workspace and Rename 
      .useXpath()
      .click(pageElements.ellipsisWorkspace)
      .pause(2000)
      .click(pageElements.workspaceRename)
      .pause(5000)
      .assert.containsText(pageElements.editWorkspaceTitle, 'Edit workspace details')

      // on edit form, enter a new title for the workspace and save/confirm
      .useCss()
      .clearValue(pageElements.inputWorkspaceTitle)
      .pause(2000)
      .setValue(pageElements.inputWorkspaceTitle, workspaceRename)
      .pause(2000)
      .click(pageElements.saveChangesButton)

      // verify that changes have been saved
      .assert.containsText(pageElements.successMessage, 'Workspace details updated')
      .assert.elementPresent('a[title= "' + workspaceRename + '"]')
      .pause(5000)

      // begin test case 4 - Delete
      // click on ellipsis, select delete and confirm delete
      .useXpath()
      .click(pageElements.ellipsisWorkspace)
      .pause(2000)
      .click(pageElements.workspaceDelete)
      .pause(2000)
      .click(pageElements.workspaceDeleteConfirm)
      .pause(1000)
      
      // verify that created workspace has been removed from the list
      .useCss()
      .assert.containsText(pageElements.successMessage, 'Personal workspace deleted')
      .expect.element('a[title= "' + workspaceRename + '"]').to.not.be.present;
        
      browser.pause(2000)
      .end();
  }
};
