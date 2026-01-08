import type { ReactNode } from "react";

type CategoryCardProps = {
  label: string;
  icon?: ReactNode;
  borderClassName?: string;
  action?: ReactNode;
};

const CategoryCard = ({
  label,
  icon,
  borderClassName = "",
  action,
}: CategoryCardProps) => {
  return (
    <div
      className={[
        "w-[234px]",
        "shrink-0",
        "flex flex-col items-start gap-[10px]",
        "rounded-[8px] border bg-white",
        "px-[28px] py-[24px]",
        borderClassName,
      ].join(" ")}
    >
      {/* 내부 코드는 동일 */}
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2 text-800 text-[14px] font-semibold">
          {icon ? (
            <span className="text-600">{icon}</span>
          ) : (
            <span className="h-4 w-4" aria-hidden="true" />
          )}
          <span>{label}</span>
        </div>
        {action ? <div>{action}</div> : null}
      </div>
    </div>
  );
};

export default CategoryCard;