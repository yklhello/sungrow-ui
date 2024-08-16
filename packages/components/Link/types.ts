export interface LinkProps {
  type?: "primary" | "success" | "warning" | "danger" | "info";
  underline?: boolean;
  disabled?: boolean;
  target?: "_blank" | "_parent" | "_self" | "_top";
  href?: string;
  icon?: string;
}
