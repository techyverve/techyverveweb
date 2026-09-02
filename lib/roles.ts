export interface Role {
  title: string;
  stackTag: string;
  location: string;
}

export const roles: Role[] = [
  { title: "Frontend developer", stackTag: "react.ts", location: "Kharadi, Pune" },
  { title: "Backend engineer", stackTag: "node.api", location: "Kharadi, Pune" },
  { title: "Mobile developer", stackTag: "react-native", location: "Remote friendly" },
];
