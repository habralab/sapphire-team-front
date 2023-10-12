export interface MenuRoute {
  path: string;
  name: string;
  icon: (size: string, count?: number) => JSX.Element;
  divided?: boolean;
}
