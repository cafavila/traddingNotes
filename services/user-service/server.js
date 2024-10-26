import app from './src/infraestructure/http/ExpressApp.js'

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log('[INFO] Server is running en el puerto:', PORT))