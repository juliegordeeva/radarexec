export function cn(...inputs: (string | false | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ');
}

export function scrollToSection(href: string) {
  const id = href.replace('#', '');
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
