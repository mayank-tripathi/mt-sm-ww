# Prerequisites
1. Install the latest LTS version of Node.js from [here](https://nodejs.org/en/download)
2. Install Visual Studio Code from [here](https://code.visualstudio.com/download)
3. For developers only, install the following extensions for Visual Studio Code (Ctrl+Shift+X):
   - Debugger for Chrome (by Microsoft)
   - EditorConfig for VS Code (by EditorConfig)
   - Import Cost (by Wix)
   - npm (by egamma)
   - npm Intellisense (by Christian Kohler)
   - Path Intellisense (by Christian Kohler)
   - Sort Typescript Imports (by Michael Loughry)
   - TSLint (by egamma)
4. Install Sourcetree from [here](https://www.sourcetreeapp.com)
5. Open Sourcetree and tick **Disable SSL certificate validation** checkbox in Tools - Options - Git
6. In Sourcetree clone the repository from [here](https://bitbucket.shl.systems/scm/ir/mayank-wedding-website.git) to your computer
7. Browse to [here](https://bitbucket.shl.systems/projects/IR/repos/mayank-wedding-website/browse)
8. Create a new **Feature** remote branch for the story you are working on. Ensure it becomes listed [here](https://bitbucket.shl.systems/projects/IR/repos/mayank-wedding-website/branches)
9. Check out the remote branch that was created in the previous step to your local branch
10. Open folder in Visual Studio Code and open terminal by pressing Ctrl+'
11. Run the following command to install all required dependencies: **npm install** or **npm i**

# NPM scripts
1. To run TS linting run the following command: **npm run tslint**
2. To run unit tests run the following command: **npm test**
3. To build and start in debug mode run the following command: **npm run build:debug** and once completed, **npm run start:app:debug** or **npm run start:docs:debug**
4. To build and start in release mode run the following command: **npm run build:release** and once completed, **npm run start:app:release** or **npm run start:docs:release**

# How to build and run the project in debug mode?
1. In the terminal run the following command: **npm run build:debug**
2. Wait until the following message is shown: "mayank-wedding-website" project has been successfully compiled in "debug" mode (Application, Application (UMD), Documentation)
3. Run the following command to start the main application: **npm run start:app:debug**
4. Wait until the following message is shown: "Application" web server is listening on http://localhost:4001 for "mayank-wedding-website" project in "debug" mode
5. Ctrl+click on the link to open browser window
6. In a new terminal run the following command to start the documentation site: **npm run start:docs:debug**
7. Wait until the following message is shown: "Documentation" web server is listening on http://localhost:4003 for "mayank-wedding-website" project in "debug" mode
8. Ctrl+click on the link to open browser window

# How to build and run the project in release mode?
1. In the terminal run the following command: **npm run build:release**
2. Wait until the following message is shown: "mayank-wedding-website" project has been successfully compiled in "release" mode (Application, Application (UMD), Documentation)
3. Run the following command to start the main application: **npm run start:app:release**
4. Wait until the following message is shown: "Application" web server is listening on http://localhost:4001 for "mayank-wedding-website" project in "release" mode
5. Ctrl+click on the link to open browser window
6. In a new terminal run the following command to start the documentation site: **npm run start:docs:release**
7. Wait until the following message is shown: "Documentation" web server is listening on http://localhost:4003 for "mayank-wedding-website" project in "release" mode
8. Ctrl+click on the link to open browser window

# What if port 4001 is already in use (main application)?
1. Go to build/Constants/index.ts
2. Change **APP_PORT** value to any available port
3. Re-build and re-start

# What if port 4003 is already in use (documentation site)?
1. Go to build/Constants/index.ts
2. Change **DOCS_PORT** value to any available port
3. Re-build and re-start

# How to debug?
## Debug main application
1. Set breakpoint(s) in the code. Breakpoints can be toggled by clicking on the editor margin.
2. Run debug web server on terminal: **npm run start:app:debug** and then open a new browser instance to launch application on http://localhost:4001
3. To launch the debugger there are multiple ways:
    - Press **F5** or
    - Go to the **Debug View** (Ctrl+Shift+D) by clicking Debug icon in the Activity Bar on the side of VS Code and in **DEBUG** dropdown select **Debug Application**, then press the green arrow or
    - Press Play icon in the status bar on the bottom left side (check that it has **Debug Application** text beside it)
4. Refresh the page to hit your breakpoint. Once a debug session starts,
    - Debug Console panel is displayed with debugging logging
    - Status bar will turn orange
    - Debug Actions pane will appear on the top of the editor
5. Step through the source code
    - Continue / Pause: F5
    - Step Over: F10
    - Step Into: F11
    - Step Out: Shift+F11
    - Restart: Ctrl+Shift+F5
    - Stop: Shift+F5

## Debug documentation
1. Set breakpoint(s) in the code. Breakpoints can be toggled by clicking on the editor margin.
2. Run debug web server on terminal: **npm run start:docs:debug** and then open a new browser instance to launch documentation on http://localhost:4003
3. To launch the debugger there are multiple ways:
    - Press **F5** or
    - Go to the **Debug View** (Ctrl+Shift+D) by clicking Debug icon in the Activity Bar on the side of VS Code and in **DEBUG** dropdown select **Debug Documentation**, then press the green arrow or
    - Press Play icon in the status bar on the bottom left side (check that it has **Debug Documentation** text beside it)
4. Refresh the page to hit your breakpoint. Once a debug session starts,
    - Debug Console panel is displayed with debugging logging
    - Status bar will turn orange
    - Debug Actions pane will appear on the top of the editor
5. Step through the source code
    - Continue / Pause: F5
    - Step Over: F10
    - Step Into: F11
    - Step Out: Shift+F11
    - Restart: Ctrl+Shift+F5
    - Stop: Shift+F5

## Debug unit tests
### Debug all unit tests
1. Set breakpoint(s) in unit test files
2. Go to the **Debug View** (Ctrl+Shift+D) by clicking Debug icon in the Activity Bar on the side of VS Code and in **DEBUG** dropdown select **Debug All Unit Tests**, then press the green arrow

### Debug current unit test
1. Set breakpoint(s) in the currently open unit test file
2. Go to the **Debug View** (Ctrl+Shift+D) by clicking Debug icon in the Activity Bar on the side of VS Code and in **DEBUG** dropdown select **Debug Current Unit Test**, then press the green arrow

References:
1. https://code.visualstudio.com/docs/editor/debugging
2. https://code.visualstudio.com/docs/nodejs/reactjs-tutorial#_debugging-react
3. https://github.com/Microsoft/vscode-chrome-debug/blob/master/README.md