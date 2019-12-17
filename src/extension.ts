import * as vscode from 'vscode';
// import * from 'functions';

async function alignByToken(editor: vscode.TextEditor, edit: vscode.TextEditorEdit) {
	// Grab current selection or return if nothing is selected
	const text = editor.document.getText(editor.selection);
	if (!text) {
		return;
	}

	const token = await vscode.window.showInputBox({
		placeHolder: 'Enter token to align by'
	});
	if (!token) {
		return;
	}

	const spaceType = await vscode.window.showQuickPick(['Tabs', 'Spaces'], {
		placeHolder: 'Select spacing type'
	});
	if (!spaceType) {
		return;
	}

	// TODO Query tab size...

	// const lines = getLines(text, keyword);
	// const mask = getMask(lines);
	// const transformedText = transform(lines, mask, getSpaces);
	// const result = joinWithKeyword(transformedText, keyword);
	// editor.edit(builder => builder.replace(editor.selection, result));
}

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerTextEditorCommand('extension.alignByToken', alignByToken);
	context.subscriptions.push(disposable);
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function deactivate() {}
