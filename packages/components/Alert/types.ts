export type AlertType = "success" | "info" | "warning" | "danger";

export interface AlertPorps {
  title?: string;
  type?: "success" | "warning" | "info" | "error";
  description?: string;
  closable?: boolean;
  center?: boolean;
  showIcon?: boolean;
  closeText?: string;
  effect?: "light" | "dark";
}
export interface AlertEmits {
  (e: "close"): void;
}
export interface AlertInstance {
  close: () => void;
  open: () => void;
}
