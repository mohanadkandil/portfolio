import { Arrow } from "@/icons";
import { classNames } from "@/utils";

const styles = {
  base: "p-9 bg-[#2C2C2E] rounded-[36px] text-base font-semibold text-[#fffffe]",
  container: "space-y-4",
  link: {
    container: "relative bottom-0 w-full h-full",
    button:
      "rounded-full bg-[#2CB67D] w-8 h-8 flex justify-center items-center text-white",
    icon: "w-5 h-5",
  },
  type: {
    squared: "w-[280px] h-[280px]",
    horizontal: "w-[576px] h-[280px]",
    vertical: "w-[280px] h-[590px]",
  },
};

type Props = {
  type?: keyof typeof styles.type;
  children: React.ReactNode;
  link?: boolean;
  className?: string;
};

const RedirectionLink = () => {
  return (
    <div className={styles.link.container}>
      <button className={styles.link.button}>
        <Arrow className={styles.link.icon} />
      </button>
    </div>
  );
};

export const Card = (props: Props) => {
  return (
    <div
      className={classNames(
        styles.base,
        styles.type[props.type || "squared"],
        props.className
      )}
    >
      <div className={classNames(styles.container)}>
        {props.children}
        {props.link ? <RedirectionLink /> : null}
      </div>
    </div>
  );
};
