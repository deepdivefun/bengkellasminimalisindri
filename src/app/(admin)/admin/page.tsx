import prisma from '@/lib/prisma'

export default async function Dashboard() {
  const users = await prisma.user.findMany()

  return (
    <div>
      <h1>Dashboard Page</h1>
    </div>
  )
}
