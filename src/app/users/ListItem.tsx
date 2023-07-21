import type { User } from 'next-auth';

interface Props {
  user: User;
}

const ListItem = ({ user }: Props) => {
  return (
    <>
      <div>{user.name}</div>
      <div>{user.email}</div>
    </>
  );
};

export default ListItem;
