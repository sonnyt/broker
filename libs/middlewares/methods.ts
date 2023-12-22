import type { VercelRequest, VercelResponse, VercelApiHandler } from '@vercel/node';

type handlers = {
  [key in 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH']?: VercelApiHandler;
};

export function handleMethods(methods: handlers) {
  return (req: VercelRequest, res: VercelResponse) => {
    if (methods[req.method as keyof handlers]) {
      return methods[req.method as keyof handlers]!(req, res);
    }

    return res.status(405).json({ error: 'Method not allowed' });
  };
}

