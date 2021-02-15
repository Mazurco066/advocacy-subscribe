import * as contentful from 'contentful'

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = contentful.createClient({ space, accessToken })

export async function fetchEntries() {
  const { items } = await client.getEntries()
  return items || {}
}

