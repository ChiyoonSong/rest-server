export default async () => {
  return { ...(await import('./index-' + process.env.NODE_ENV)) };
};
