type HeaderPropTypes = {
  name: string;
};
const Header = ({ name }: HeaderPropTypes) => {
  return <h1 className="text-2xl font-semibold text-gray-700">{name}</h1>;
};
export default Header;
