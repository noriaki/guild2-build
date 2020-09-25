import { NextApiRequest, NextApiResponse } from 'next';

import icons from '~/data/icons';

const ApiCharactorIcons = (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(icons);
};

export default ApiCharactorIcons;
