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
	- Run **docker-compose run --rm tests** to run the unittests
	- Run **docker-compose run --rm flake8** to run flake8
	- To easy production deploy you can **make build**, but you need make tools installed before. Another way is **docker-compose up -d prod** works as well.
- Endpoints: After run the application, you can check the API endpoins.
- ```GET /api/v1/helthcheck```
	- ```GET /api/v1/movie/upcoming```
	- ```GET /api/v1/movie/upcoming?page=([0-9]+)```

## Running the project
- Run docker-compose up dev
- Go to the browser on ```http://localhost:8000/api/v1/healthcheck``` or ```http://localhost:8000/api/v1/movie/upcoming```
