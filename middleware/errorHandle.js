// 404 Middleware
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
  });
  
  // General Error Handler
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
  });
  