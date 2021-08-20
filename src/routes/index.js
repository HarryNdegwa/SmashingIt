import express from 'express';
import { indexPage } from '../controllers';
import { messages } from '../controllers/messages';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/messages', messages);

export default indexRouter;
