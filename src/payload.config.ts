// storage-adapter-import-placeholder
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { News } from './collections/News'
import { General } from './globals/General'
import { Menu } from './collections/Menu'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { uploadthingStorage } from '@payloadcms/storage-uploadthing'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, News, Menu],
  globals: [General],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  email: nodemailerAdapter({
      defaultFromAddress: 'noreply@mingledelight.com',
      defaultFromName: 'Payload',
      // Any Nodemailer transport can be used
      transportOptions: {
        host: process.env.SMTP_HOST,
        port: 1025,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      },
  }),
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || '',
      authToken: process.env.DATABASE_AUTH_TOKEN || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    uploadthingStorage({
      collections:{
        media: {
          disablePayloadAccessControl: true,
        },
      },
      options: {
        token: process.env.UPLOAD_THING_TOKEN,
        acl: 'public-read',
      }
    }),
    // storage-adapter-placeholder
  ],
})
