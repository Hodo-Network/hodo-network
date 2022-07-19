import { rest } from 'msw';
import { ASSETS_API, COLLECTIONS_API, USER_API } from '../constants/api';
import { assets, collections, user } from '../data';

export const handlers = [
  rest.get(ASSETS_API, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(assets),
    );
  }),

  rest.get(COLLECTIONS_API, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(collections),
    );
  }),

  rest.get(USER_API, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(user),
    );
  }),
];
