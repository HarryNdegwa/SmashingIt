import Model from '../models/model';

const messagesModel = new Model('messages');

export const messages = async (req, res) => {
  try {
    const data = await messagesModel.select('name, message');
    return res.status(200).json({ messages: data.rows });
  } catch (error) {
    res.status(200).json({ messages: err.stack });
  }
};
