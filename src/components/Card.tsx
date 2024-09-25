interface CardProps {
  children?: React.ReactNode;
}

function Card({ children }: CardProps) {
  return (
    <div className="rounded-lg bg-cardLight p-6 shadow-xl dark:bg-cardDark">
      {children}
    </div>
  );
}

export default Card;
