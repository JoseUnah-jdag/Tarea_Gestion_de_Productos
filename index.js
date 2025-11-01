import express from 'express';
import { loadEnvFile } from 'node:process';

loadEnvFile()

const app = express()

app.use(express.json())