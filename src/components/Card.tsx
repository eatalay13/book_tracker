interface CardProps {
  children?: React.ReactNode;
}

function Card({ children }: CardProps) {
  return (
    <div className="mx-auto max-w-sm rounded-lg border border-gray-200 bg-cardLight p-6 shadow-xl dark:border-zinc-800 dark:bg-cardDark">
      {children}
    </div>
  );
}

export default Card;
