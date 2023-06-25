module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'cay_1996999',
  database: 'yourcar',
  entities: ['dist/**/entities/*{.ts,.js}'],
  synchronize: true,
  migrations: ['dist/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
