const privileges = ['VIEW_OVERVIEW', 'VIEW_DETAILS', 'DO_COOL_STUFF'] as const;
export type Privilege = typeof privileges[number];
