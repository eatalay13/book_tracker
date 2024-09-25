interface CardProps {
  children?: React.ReactNode;
}

function Card({ children }: CardProps) {
  return (
    <div className="bg-cardLight dark:bg-cardDark m-5 rounded-lg p-8 shadow-xl">
      {children}
    </div>
  );
}

export default Card;
