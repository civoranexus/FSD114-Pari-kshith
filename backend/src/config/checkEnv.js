export function checkEnv() {
  const required = [
    "DATABASE_URL",
    "JWT_SECRET"
  ];

  for (const key of required) {
    if (!process.env[key]) {
      console.error(`Missing ENV: ${key}`);
      process.exit(1);
    }
  }
}