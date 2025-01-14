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
  class?: string[];
  textContent?: string;
};

/*export type AttributeClass = {
  width?: string;
};*/
