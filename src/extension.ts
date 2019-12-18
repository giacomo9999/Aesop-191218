// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
const fs = require("fs");
const path = require("path");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "aesop" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "extension.welcomeUser",
    () => {
      const htmlContent = `<!DOCTYPE html>
	  <html lang="en">
		<head>
		  <meta charset="UTF-8" />
		  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
		  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
		  <title>Aesop 1.0</title>
		</head>
		<body></body>
	  </html>
	  `;
      const folderPath = vscode.workspace.workspaceFolders[0].uri
        .toString()
        .split(":")[1];

      console.log(folderPath);

      fs.writeFile(path.join(folderPath, "index.html"), htmlContent, err => {
        if (err) {
          console.error(err);
          return vscode.window.showErrorMessage(
            "Failed to create HTML boilerplate"
          );
        }
        vscode.window.showInformationMessage("Created boilerplate HTML file.");
      });
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
