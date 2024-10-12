import Users from '@/models/users';

export default async function Home() {
  const users = await Users.all.select().toArray();

  return <div className="flex p-8">Hello, next { users.length }!</div>;
}
