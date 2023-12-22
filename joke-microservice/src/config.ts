const config = {
  microserviceOptions: {
    host: '127.0.0.1',
    port: 3001, // kuvasta pitää etsiä kunkin microservicen portti ja muokata
    retryAttempts: 0,
    retryDelay: 0,
  },
};

export default config;
