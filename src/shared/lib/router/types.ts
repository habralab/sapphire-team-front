export interface BasePageProps {
  isPublic?: boolean;
  user: {
    isAuth: boolean;
    userId?: string;
    isActivated?: boolean;
  };
}

export type BasePage = (props: BasePageProps) => React.ReactElement;
