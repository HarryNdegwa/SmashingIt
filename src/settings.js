import dotenv from 'dotenv';

dotenv.config();

export const testEnvVariable = process.env.TEST_ENV_VARIABLE;
export const dbUrl = process.env.DB_URL;
