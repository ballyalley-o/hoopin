require('dotenv/config')
const { defineConfig } = require('drizzle-kit')

module.exports = defineConfig({
  dialect      : 'postgresql',
  schema       : './src/db/schema.ts',
  out          : './drizzle',
  dbCredentials: {
    url: process.env.DB_URI,
  },
})
