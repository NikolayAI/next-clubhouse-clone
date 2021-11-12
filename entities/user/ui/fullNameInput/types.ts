export interface IEnterFullName {
  fullName: string;
  setFullName: (payload: string) => void;
  className?: string;
}