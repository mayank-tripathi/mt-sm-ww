import * as React from "react";
import SampleComponent from "UI/Web/Components/SampleComponent";
import { l } from "UI/Stores/LocalisationStore";
import { render, unmountComponentAtNode } from "react-dom";
import "UI/Web/Styles/scss/custom-styles.scss";

export async function getMessagesForLocale(locale: string): Promise<void> {
  l.getMessagesForLocale(locale).then(() => Promise.resolve()).catch(() => Promise.reject("Failed to get messages for locale")); // tslint:disable-line:ban promise-function-async
}

export function mountSampleComponent(htmlContainerId: string): void {
  const htmlContainer = document.getElementById(htmlContainerId);
  if (htmlContainer) {
    unmountReactComponent(htmlContainerId);
    render(<SampleComponent title={l.get("title")} />, htmlContainer);
    window.addEventListener("unload", () => unmountReactComponent(htmlContainerId), { once: true });
  }
}

export function unmountReactComponent(htmlContainerId: string): void {
  const htmlContainer = document.getElementById(htmlContainerId);
  if (htmlContainer) {
    unmountComponentAtNode(htmlContainer);
  }
}