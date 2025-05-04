import * as migration_20250502_100552 from './20250502_100552';

export const migrations = [
  {
    up: migration_20250502_100552.up,
    down: migration_20250502_100552.down,
    name: '20250502_100552'
  },
];
