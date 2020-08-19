# thesis-project
NOTE: This is the client-side, server can be found at: https://github.com/juansp92/thesisProjectBackend

Our Thesis Project Web App (name still to be decided) consist of a marketplace for upcycled and second hand furniture, where users can register to buy and/or sell.
For our MVP our goal is that users are able to:
-Authenticate and have access to private routes.
-Create their own gallery of products to sell.
-Add new products to the gallery through a form.
-Browse different categories of products to buy.
-Add products to cart.
-Process payments and arrange delivery.

This project was bootstrapped with Create React App and uses Typescript.
Latest changes can be found in branch "develop".

Run "npm i" to install node modules.
To run the app from the the client folder with : "npm start", which runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.
The page will reload if you make edits.

Currently in progress: 
-branch auth-testing is making changes in history and in Login to fix rendering issues (path changes correctly with history.push() but it needs manual reloading to render the page, which makes app lose the isAuthenticated state). 
-product categories page
-AppBar component has been placed temporarily and has no functionality. 