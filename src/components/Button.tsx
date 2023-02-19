import { classNames } from "@/utils/class-names";

const styles = {
  base: "flex justify-center items-center font-semibold min-w-fit space-x-3",
  active: "transition-opacity active:opacity-80",
  color: {
    primary: {
      solid:
        "bg-gradient-to-r from-primary to-secondary text-white border-y-2 border-transparent",
      outline: "border-2 border-primary text-primary border-[#2CB67D]",
      ghost: "border-2 border-transparent text-primary",
    },
    disabled: {
      solid:
        "bg-gray-200 text-gray-500 border-y-2 border-transparent pointer-events-none ",
      outline: "border-2 border-gray-300 text-gray-500 pointer-events-none",
      ghost: "border-2 border-transparent text-gray-500 pointer-events-none",
    },
  },
  size: {
    sm: "h-8 py-2 px-3 text-xs rounded-lg",
    md: "h-10 py-2 px-4 text-xs rounded-xl",
    lg: "h-12 py-3 px-6 text-sm rounded-xl",
    xl: "h-14 py-3 px-6 text-sm rounded-xl",
    "2xl": "h-16 py-4 px-4 rounded-xl",
    "3xl": "h-20 py-4 px-4 rounded-xl",
  },
  width: {
    auto: "w-auto",
    full: "w-full",
  },
};

type Props = {
  as?: "button" | "label";
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick: React.ButtonHTMLAttributes<
    HTMLButtonElement | HTMLLabelElement
  >["onClick"];
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  color?: keyof (typeof styles)["color"];
  size?: keyof (typeof styles)["size"];
  width?: keyof (typeof styles)["width"];
  variant?: keyof (typeof styles)["color"][keyof (typeof styles)["color"]];
};

export const Button = (props: Props) => {
  const Element = props.as || "button";

  return (
    <Element
      className={classNames(
        styles.base,
        props.disabled ? "" : styles.active,
        styles.color[props.disabled ? "disabled" : props.color || "primary"][
          props.variant || "solid"
        ],
        styles.size[props.size || "md"],
        styles.width[props.width || "auto"],
        props.className
      )}
      type={props.type || "button"}
      disabled={props.disabled}
      onClick={Element === "button" ? props.onClick : undefined}
    >
      {props.children}
    </Element>
  );
};
