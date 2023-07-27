export type Work = {
  contents: WorkContents[];
};

export type WorkContents = {
  id: string;
  image: Image;
  image_sp: Image;
  image_sp2: Image;
  title: string;
  href: string;
  use_tech: string;
  comment: string;
  comment_large: string;
};

type Image = {
  url: string;
  width: number;
  height: number;
};

// キャリア
export type Career = {
  contents: CareerContents[];
};

export type CareerContents = {
  timeline_date: string;
  timeline_title: string;
  timeline_content: string;
};
