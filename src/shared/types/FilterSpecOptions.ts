export interface FilterSpecOptions {
  FilterSpec: React.ElementType<{
    singleChecked?: boolean;
    doubleChecked?: boolean;
    userSpecs: string[];
    setUserSpecs: (userSpecs: string[]) => void;
  }>;
}
