export const Arrow = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-arrow-up-right"
      {...props}
    >
      <path d="M7 17L17 7" />
      <path d="M7 7L17 7 17 17" />
    </svg>
  );
};
