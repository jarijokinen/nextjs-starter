import { prisma } from '@/lib/prisma';
import ListItem from './ListItem';

const UsersPage = async () => {
  const users = await prisma.user.findMany();

  return <>{users.map(user => <ListItem key={user.id} user={user} />)}</>
};

export default UsersPage;
