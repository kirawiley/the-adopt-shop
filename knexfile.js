exports.development = {
  client: 'postgresql',
  connection: {
    user: 'occs',
    database: 'pets'
  },
  migrations: {
    directory: './the-adopt-shop',
    tableName: 'pets'
  }
}
