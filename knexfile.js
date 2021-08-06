
module.exports = {

  development: {
    client: 'pg',
    connection: {
      host : 'db', 
      user:"postgres",
      password:"123456",
      database: 'instituicoes',
      port: 5432
    },
  
    migrations:{
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },

    seeds:{
      directory: `${__dirname}/src/database/seeds`
    }
  }
};
