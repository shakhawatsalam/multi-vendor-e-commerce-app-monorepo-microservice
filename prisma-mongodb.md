# Prisma with MongoDB

This project uses Prisma ORM 6.19 with MongoDB. The schema is
[`packages/libs/prisma/schema.prisma`](packages/libs/prisma/schema.prisma), and
the shared Prisma Client is exported from
[`packages/libs/prisma/db.ts`](packages/libs/prisma/db.ts).

Set `DATABASE_URL` in the root `.env` file to a MongoDB connection string, then
generate the client:

```sh
npm run prisma:generate
```

After making a schema change, validate it and apply it to the database with:

```sh
npx prisma validate --schema=packages/libs/prisma/schema.prisma
npm run prisma:push
```

MongoDB schema changes use `db push`; Prisma Migrate does not support MongoDB.
Back up important data before applying schema changes. Multi-document
transactions require MongoDB to run as a replica set.
