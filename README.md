# React.js skills assessment test

## Assignment

Your task is to create one-page application with list of clients and their details. Clients data are stored in 'clients.json' which will be loaded dynamically via http request.

## Wireframe description:

-   **Clients list:** Every item will display smaller avatar clients name and job title. When user clicks on an item, it will display client's details on the right.
-   **Search:** It will search all informations, not only those showed in the clients list. Results are displayed as filtered out list of clients and they will appear instantly as user types.
-   **Client's details:** Full size avatar (128x128px) and all other client's informations.

## Stack

-   plain javascript (no coffescript, typescript, …). ES6 with Babel is possible.
-   react.js
-   redux, flux or none
-   build tool of your choice
-   you can use CSS framework, CSS/HTML preprocessors of your choice
-   git is required

## Launching

First, make sure your directory is set to the root of this repository, then type `yarn start` to start the server. Then `cd react-ui` in a separate terminal and `yarn start` again to launch the dev server for serving the frontend. Therefore, this repository has 2 `package.json`'s. This frontend is configured to proxy all requests to the backend at port 5000, which is a similar setup to our project at Friendly Storage.

## Comment:

This is not a very structured assignment as we want to give you a chance to show of your skills in both react and express. Make the application works as best as you can, because we will be looking at code structure and functionality first and foremost to determine your skill level.
