interface Props {
  focusable?: boolean;
}

const Button = ({ focusable = true }: Props) => {
  return (
    <button
      className="absolute left-6 bottom-5 p-2 border border-black/10 dark:border-white/20 rounded-full transition-colors duration-500 ease-out group-hover:border-black/50 dark:group-hover:border-white/50"
      tabIndex={focusable ? 0 : -1}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        xmlSpace="preserve"
        className="w-4"
      >
        <path
          d="m14.707 7.293-6-6-1.414 1.414L11.586 7H1v2h10.586l-4.293 4.293 1.414 1.414 6-6c.391-.391.391-1.023 0-1.414z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
};

export default Button;
