require("dotenv-flow").config();

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
 
  },

  test: {
    client: "sqlite3",
    connection: ":memory:",
    useNullAsDefault: true,
    storage: "./__tests__/database/database.sqlite",
    migrations: {
      directory: `${__dirname}/__test__/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/__test__/database/seeds`
    }
  },
  

}
