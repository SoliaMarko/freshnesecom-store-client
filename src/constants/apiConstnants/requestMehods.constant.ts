export const REQUEST_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE'
} as const;

export type REQUEST_METHODS_TYPE = (typeof REQUEST_METHODS)[keyof typeof REQUEST_METHODS];
