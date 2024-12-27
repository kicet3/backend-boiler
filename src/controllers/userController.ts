import { Request, Response } from 'express';

export const getUser = (req: Request, res: Response): void => {
  const userId = req.params.id;
  res.json({ id: userId, name: 'SnowFall' });
};
