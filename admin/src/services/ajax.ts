
const HOST = 'http://localhost:8080' // Mock 的 host

export async function get(url: string) {
  const res = await fetch(`${HOST}${url}`)
  const data = res.json()
  return data
}

export async function post(url: string, body: any) {
  const res = await fetch(`${HOST}${url}`, {
    method: 'post',
    body: JSON.stringify(body)
  })
  const data = res.json()
  return data
}