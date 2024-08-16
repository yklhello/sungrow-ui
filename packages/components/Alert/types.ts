export interface AlertPorps {
  title?: string;
  type?: "success" | "warning" | "info" | "error";
  description?: string;
  closable?: boolean;
  center?: boolean;
  showIcon?: boolean;
  closeText?: string;
  effect?: "light" | "dark";
  onClose?: () => void;
}

export interface AlertInstance {
  close: () => void;
  open: () => void;
}
