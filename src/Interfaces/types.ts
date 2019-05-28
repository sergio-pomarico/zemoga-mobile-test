export interface Action {
  type: string;
  [key: string]: any;
}

export interface Response {
  ok: boolean;
  data: any;
}

export interface Dictionary {
  [key: string]: any;
}

