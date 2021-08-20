import { Pool } from 'pg';
import dotenv from 'dotenv';
import { dbUrl } from '../settings';
dotenv.config();

export const pool = new Pool({ connectionString: dbUrl });
