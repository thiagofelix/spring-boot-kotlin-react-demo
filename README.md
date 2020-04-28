## Project Structure

This codebase implements a gradle multi-project layout. The `backend` folder contains the spring boot kotlin application responsible for providing all the data used by the react application. The backend build process is a standard Spring Boot application which extends the `processResources` task to include the frontend assets during the jar compilation.

The `frontend` folder contains the react application which during development is started separately at port `:3000` and forwards requests to the backend `:8080` port.

## Getting Started

### Backend
Normally while developing in Kotlin we use the IntelliJ IDE which automatically compile code changes and reloads the application. You need to import this project as a gradle project by selecting the `build.gradle.kts` file on the "Import Project" window.

Once the project is imported you can start the Spring Boot application by running the gradle task `:backend:bottRun`

After you start the aforementioned task the application should be live at `http://localhost:8080`


### Frontend
The recommended way of starting the frontend code is by running the following command on your terminal `./gradlew :frontend:start`. This will start the react application at `http://localhost:3000`.

Changes made to the `frontend` are automatically updated in the browser window.

#### Storybook
The frontend app uses storybook as a playground environment for the components. If you want to start the storybook just run the command `./gradlew :frontend:storybook`

If you want to run both the app and the storybook you can also run `./gradlew --paralell :frontend:start :frontend:storybook`

## Testing
If you want to run the entire test suite (front end and backend) you should run `./gradlew check`

## Production Build

```
./gradlew clean build
java -jar backend/build/libs/*.jar
```
