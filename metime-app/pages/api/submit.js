import nc from 'next-connect'
import clientPromise from './auth/lib/mongodb'

const handler = nc()

handler.post(async (req, res) => {
  const { location, interests  } = req.body

  try {
    const client = await clientPromise
    const db = client.db('UserData')
    const collection = db.collection('Onboarding')

    await db.collection('Onboarding').insertOne({ location, interests })

    res.json({ message: 'success' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'error' })
  }
})

export default handler
