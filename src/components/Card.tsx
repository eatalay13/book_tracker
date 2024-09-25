interface CardProps {
  children?: React.ReactNode;
}

function Card({ children }: CardProps) {
  return (
    <div className="m-5 rounded-lg bg-white p-8 shadow-xl">{children}</div>
  );
}

export default Card;
