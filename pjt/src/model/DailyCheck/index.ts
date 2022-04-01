export interface MDailyCheck {
  id: number;
  name: string;
  description: string;

  upload?: MDailyCheck_Upload;
}

export interface MDailyCheck_Upload {
  id: number;
  observation: string;
}
