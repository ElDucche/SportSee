import { UserInfos } from "../../types";

interface HeaderProps {
    user: UserInfos;
}

const Header: React.FC<HeaderProps> = ({user}) => {

  return (
    <header>
      <h1 className="text-5xl">Bonjour <span className="text-primary">{user.firstName}</span></h1>
      <h3 className="text-2xl">Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
    </header>
  );
}

export default Header;