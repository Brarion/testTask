export interface IProps {
  label: string;
  type: string;
  value?: string;
  checked?: boolean | undefined;
  required?: boolean;
  error?: boolean;
  onChange(propetrty: string, value: string | boolean): void;
}