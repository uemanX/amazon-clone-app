type Props = {
  name: string;
};

const Button = ({ name }: Props) => {
  return <button>{name}</button>;
};

export default Button;
