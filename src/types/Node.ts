export type Node = {
  id: string;
  type: string;
  attributes: {
    key: string;
    src?: string;
    alt?: string;
    href?: string;
    class?: string;
    textContent?: string;
  };
  children: Node[];
};
