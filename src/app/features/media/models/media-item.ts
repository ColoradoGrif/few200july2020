export interface MediaItem {
  id: string;
  title: string;
  format: string;
  recommendedBy: string;
  note: string;
  isTemporary: boolean;
  consumedOn: null | string;
}
