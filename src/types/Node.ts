export type Node = {
  id: string;
  type: string;
  attributes: Attributes;
  children: Node[];
};

export type Attributes = {
  key: string;
  src?: string;
  alt?: string;
  href?: string;
  class?: TitleClass;
  textContent?: string;
};

export type TitleClass = {
  size: string;
  weight: string;
  letterSpacing: string;
  textAlign: string;
  color: string;
};

/*export type AttributeClass = {
  width?: string;
};*/
