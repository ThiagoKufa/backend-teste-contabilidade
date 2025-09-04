import express from 'express'
import router from './routes';

process.loadEnvFile('.env')

const PORT = process.env.PORT || 3030;
const app = express()
app.use(express.json())

app.use('/api/v1', router)

app.listen(PORT, () => {
  console.log(`🚀 Server running on port http://localhost:${PORT}`);
  console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
});

