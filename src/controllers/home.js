import { testEnvVariable } from '../settings';

export const indexPage = (req, res) => {
  return res.status(200).json({ message: testEnvVariable });
};
