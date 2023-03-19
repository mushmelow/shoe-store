import { MatcherFunction } from "@testing-library/react";

export const getByContent =
  (content: string): MatcherFunction =>
  (_: string, element: Element | null) => {
    if (!element) return false;

    const hasText = (elem: Element) => elem.textContent === content;
    const nodeHasText = hasText(element);
    const childrenDontHaveText = Array.from(element.children).every(
      (child) => !hasText(child)
    );

    return nodeHasText && childrenDontHaveText;
  };
