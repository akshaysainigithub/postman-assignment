# Postman-CRUD-Test

Postman Assignment

________________________________________

Test Case 1)

Title: User should be able to create a new workspace

Functionality/module: Create a new Personal Workspace - Click the Create a new workspace button and enter in the required fields.

Priority: High

Preconditions: User should be logged in

Steps:

1.	Go to postman.com
2.	Click on Sign In and enter credentials of an already registered user
3.	On All Workspaces page, click on "Create a new workspace"
4.	Enter "Name", "Summary", select "Type" as personal and click on "create workspace" button

Expected Results:

1.	Postman.com home page should load successfully, can verify by visibility of few elements on the web page. Sign in button on top right should be visible
2.	Sign In page should open successfully. User should be able to enter text into login and password field and click on Sign in
3.	On successful sign in user should land on All Workspaces page
4.	When clicked on "Create a new workspace", a form should open up
5.	After filling the form and clicking on create workspace button user should land on workspace page where there are no APIs yet
6.	User should see success ghost message on the right side of the window - "Personal workspace created"
7.	Also in the header it should show Name of the newly created workspace

________________________________________

Test Case 2)

Title: Read the newly created workspace in the list on All Workspaces page and make sure it's present

Functionality/module: Read the list of your personal workspaces - Navigate back to All Workspaces (Upper Left Drop Down -> All Workspaces)

Priority: High

Preconditions: User should be logged in and new workspace should be created

Steps:

1.	After a new workspace has been created and user is on the page for that workspace, in the navigation bar click on workspace dropdown
2.	In the dropdown, click on "All Workspaces"

Expected Results:

1.	When clicked on dropdown, "All Workspaces" link should be visible
2.	When clicked on All Workspaces, it should take the user back to All Workspaces page
3.	In the list, the newly created workspace should be present

________________________________________

Test Case 3)

Title: Update(Rename) the newly created workspace and verify that changes are saved

Functionality/module: Update your newly created workspace - Click the ellipsis and Rename the Workspace and/or Edit Description


Priority: High

Preconditions: User should be logged in and created new workspace which should be visible on All Workspaces page

Steps:

1.	Once user has verified the new workspace in the list, click on the ellipsis in front of the workspace name
2.	In the ellipsis dropdown, select Rename
3.	When on "Edit Workspace Details" page, enter a new name for the Workspace
4.	click on Save Changes button

Expected Results:

1.	When clicked on ellipsis, a dropdown should open with multiple options such as View Details, Rename, Edit Description, Delete, Manage Members
2.	When user selects Rename from dropdown, it should take user to "Edit Workspace Details" page with Save Changes button disabled, all fields in the form editable
3.	User should be able to enter a new name for the workspace, at this time the Save Changes button should not be disabled anymore
4.	When user clicks on Save Changes, it should show a ghost success message on the right - "Workspace details updated" and take user back to All Workspaces page
5.	On All workspaces page, the newly created workspace should be present with a new updated name

________________________________________

Test Case 4)

Title: User should be able to delete a workspace from All Workspaces page

Functionality/module: Delete the workspace you created - Click the ellipsis and select Delete and Confirm

Priority: High

Preconditions: User should be logged in and should have created new workspace which should be visible on All Workspaces pages

Steps:

1.	Once user is on All Workspaces page and created/updated a workspace, click on the ellipsis in front of the workspace name
2.	In the sllipsis dropdown, select Delete
3.	In the delete modal, click on Delete button in red to confirm

Expected Results:

1.	When clicked on ellipsis a dropdown should open with multiple options such as View Details, Rename, Edit Description, Delete, Manage Members
2.	When user select Delete from dropdown, it should open a modal window to confirm Delete is user is sure about the action.
3.	In the modal, when clicked on Delete, the modal should close and success message should show on the right - "Personal workspace deleted"
4.	Previously created/edited workspace should now be gone/removed from the list on All Workspaces page

________________________________________

Automation:

Steps to run the test:
1.	The framework and code is implemented using nightwatchjs library and written in javascript, written from scratch
2.	Nightwatch installation will be needed on local machine in order to run the code, please follow instructions from here - https://nightwatchjs.org/gettingstarted/installation/
3.	Along with nightwatch, please intsall selenium server, also webdriver binary for your respective browser
4.	Once installation is complete, clone this repo - https://github.com/akshaysainigithub/Postman-CRUD-Test
5.	Please note: All 4 test cases above have been included in one script - Postman_CRUD_test.js
6.	To run the test file Postman_CRUD_test.js, go to directory "/Postman-CRUD-Test/tests" and use command - nightwatch Postman_CRUD_test.js

Note:
1.	I have used additional pause statements frequently between steps to provide additional time buffer in order to visually check the various steps taking place and not rush through. However, these pause statement would not be mandatory in actual implementation.
2.	For the purpose of regression I have included only 4 high level test cases, each associated with respective CRUD operations. There can be many more low/medium priodity cases as needed.
3.  Attached is a screenshot of test passing through different steps
4.	Also attaching a screen recording of automation test.

Please email me at saini.akshay88@gmail.com if you run into any issues.

Console screenshot:


