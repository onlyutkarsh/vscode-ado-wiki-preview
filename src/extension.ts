import * as vscode from "vscode";
import type MarkdownIt from "markdown-it";

export async function activate(_: vscode.ExtensionContext) {
  return {
    extendMarkdownIt(md: MarkdownIt) {
      return md.use(adoPlugin);
    },
  };
}

function adoPlugin(md: any) {
  const render = md.renderer.render;
  md.renderer.render = function (...args: any[]) {
    return `<div class="ado-markdown-body">
        <div class="markdown-content">${render.apply(render, args)}</div>
    </div>`;
  };
  return md;
}
