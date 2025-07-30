export interface NavLink {
  name: string;
  path: string;
}

export const NAV_LINKS: NavLink[] = [
  { name: 'AEON', path: '/' },
  { name: 'Showcase', path: '/Showcase' },
  { name: 'Docs', path: '/Docs' },
  { name: 'Blog', path: '/Blog' },
  { name: 'Analytics', path: '/Analytics' },
  { name: 'Commerce', path: '/Commerce' },
  { name: 'Templates', path: '/Templates' },
  { name: 'Enterprise', path: '/Enterprise' },
];