## TMDB WEB APP

*Upcoming movies*  list from TMDb API.

- Stack
	- ReactJS (JS)
	- Docker
- Third-party libraries
	- @material-ui/core: ReactJS components.
	- @material-ui/icons: React icons.
	- axios: HTTP client, library that help us to make HTTP requests.
	- prop-types: Library to check React props.
	- unistore: Redux alternative. Help us to manage the application state.
	- eslint: Tool to help us checking problems in our code.
	- prettier: Tool to help us with code style guide.
	- husky: Git hooks. With it with can run eslint and prettier before every git commit.
	- lint-staged: Tool to build a pipeline process and use together with husky.
	- Inside Dockerfile, we can find *serve", that is a HTTP server, that serve a static site, single page application or just a static file.
- Architecture
	-  I thought in a simple Web App. The code is structured in components, so, each part of the web app that can be separated or that has a specific logic is an individual component. This is a good way to organize the code because we can have many small files (or small components) and it help us to us maintain it.
-  Assumptions
	- The movie search only works in the current page
- Special build instructions
	- You're going to have nodejs (v8.16+) and yarn
	- Run **yarn** to install of dependencies
	- Run **yarn start** to start the application in development mode
	- To easy production deploy you can **make prod** and the application will be expose on port 5000.

## Running the project
- yarn
- yarn start
- Go to the browser on ```http://localhost:3000```
