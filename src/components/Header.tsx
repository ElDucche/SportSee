import { UserInfos } from "../lib/models/types";

interface HeaderProps {
    user: UserInfos;
}

const Header: React.FC<HeaderProps> = ({user}) => {

  return (
    <header className="mb-8 grid gap-4">
      <h1 className="max-xl:text-3xl text-7xl font-medium">Bonjour <span className="text-primary">{user.firstName}</span></h1>
      <h3 className="max-xl:text-sm text-2xl">Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
    </header>
  );
}

export default Header;