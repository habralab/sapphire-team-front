export interface MenuRoute {
  path: string;
  name: string;
  icon: ({ size, value }: { size: string; value: number }) => JSX.Element;
  divided?: boolean;
}
