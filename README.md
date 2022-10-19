# Angular test
Some intern developped an angular app to manage their contacts list.

However, it is quite not finished and the author is gone...

Could you please fix and finish it ?

## Launching the project
1. `npm install` will install the project dependencies
2. `npm run api` will launch a fake backend api based on json files in the /api directory and accessible in a browser at http://localhost:3000
3. `npm run start` will launch the angular app.

## Fixes
1. It looks like adding a new contact doesn't work... Can you find why ?
2. We noticed that clicking a link in the menu triggers a full page reload over network, is that normal ? 
3. As this app was created by an intern, it looks like the quality of code could be improved. Just fix whatever you feel needs improvement.

## Missing features
1. We'd like the menu links to be displayed on all pages and the `/` route to display the contacts list instead of an empty page
2. We'd like the new contact form to control the input values :
   * Name is mandatory and must be between 5 and 50 characters long
   * Email is mandatory and must match pattern `[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2}`
   * Phone is not mandatory, but if provided it must contain only 12 digits numbers.
3. Please change the list view to display contact cards showing name, email and phone instead of a raw names list
   * Phone numbers must be displayed in human-readable format by inserting spaces, e.g: 061234567890 => 06 12 34 56 78 90
4. Please add a "delete" button on each contact in the list view
5. Please add an "edit" button on each contact
   * Clicking the button will open an edit form below or besides the list
   * Validating the edit form will save the modification to backend, close the form, and update the list view
