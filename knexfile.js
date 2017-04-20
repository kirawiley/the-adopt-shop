exports.development = {
  client: 'postgresql',
  connection: {
    user: 'occs',
    database: 'pets'
  },
  migrations: {
    directory: './migrations',
    tableName: 'pets'
  }
}
