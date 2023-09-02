type ButtonProps = {
  onClick: () => void;
};

function Button({ onClick }: ButtonProps) {
  return <button onClick={onClick}>Click me</button>;
}

export default Button;
