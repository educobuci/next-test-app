import { Button } from '@/components/ui/button';
import Users from '@/models/users';

export default async function Home() {
  const users = await Users.all.select().toArray();

  return <div className="flex flex-col items-start p-8">
    Hello, next { users.length }!
    <Button>Button</Button>
  </div>;
}
