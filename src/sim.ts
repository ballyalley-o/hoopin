import argon2 from 'argon2'
import goodlog from 'good-logs'
import { db, pool } from 'gameover'
import { users } from './db/schema'
import { RESPONSE } from 'constant'

const TAG = 'Seed'

const baseUsers = [
  { firstname: 'Tina', lastname: 'Merrero', role: 'user' as const, email: 'tina@test.com', password: '123456' },
  { firstname: 'Roky', lastname: 'Balboa', role: 'user' as const, email: 'rocky@boxing.com', password: '123456' },
  { firstname: 'Emily', lastname: 'Brown', role: 'admin' as const, email: 'emily@example.com', password: '123456' },
]

const hashUsers = async () => {
  return Promise.all(
    baseUsers.map(async ({ password, ...rest }) => ({
      ...rest,
      password: await argon2.hash(password),
    }))
  )
}

const seed = async () => {
  try {
    await db.delete(users)
    const data = await hashUsers()
    await db.insert(users).values(data)
    goodlog.warn(RESPONSE.SUCCESS.COLLECTION_SEED)
  } catch (error: any) {
    goodlog.error(error?.message, TAG, 'sim')
    throw new Error(RESPONSE.ERROR.FAILED_SEED)
  } finally {
    await pool.end()
    process.exit()
  }
}

const destroy = async () => {
  try {
    await db.delete(users)
    goodlog.custom('bgRed', RESPONSE.SUCCESS.COLLECTION_DESTROYED)
  } catch (error: any) {
    goodlog.error(error?.message, TAG, 'destroy')
    throw new Error(RESPONSE.ERROR.FAILED_DESTROY)
  } finally {
    await pool.end()
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroy()
} else if (process.argv[2] === '-i') {
  seed()
}
