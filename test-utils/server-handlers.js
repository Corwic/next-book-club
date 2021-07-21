import { rest } from 'msw';

import { API_URL } from '../config';
import { mockedFilms } from '../__mocks__/mocks';

const handlers = [
  rest.get(API_URL, (_req, res, ctx) => {
    return res(ctx.json(mockedFilms));
  }),
];

export { handlers };
