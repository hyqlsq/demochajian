// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "helloworld" is now active!');
	const disposableshowWarningMessage = vscode.commands.registerCommand('helloworld.helloWorld', () => {
		vscode.window.showWarningMessage('nice to meet you!');
	});
	const disposableshowTime = vscode.commands.registerCommand('helloworld.showTime', () => {
		const currentTime = new Date().toLocaleTimeString();
		vscode.window.showWarningMessage(`now is:${currentTime}`);
	});
	context.subscriptions.push(disposableshowWarningMessage, disposableshowTime);
}

// This method is called when your extension is deactivated
export function deactivate() { }
