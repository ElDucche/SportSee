import { UserInfos } from "../lib/models/types";

interface HeaderProps {
    user: UserInfos;
}

const Header: React.FC<HeaderProps> = ({user}) => {

  return (
    <header className="mb-8 grid gap-4">
      <h1 className="text-3xl font-medium">Bonjour <span className="text-primary">{user.firstName}</span></h1>
      <h3 className="text-sm">Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
    </header>
  );
}

export default Header;