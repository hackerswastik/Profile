import clsx from 'classnames';

export default function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 px-2.5 py-1 text-sm font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-800',
        className,
      )}
    >
      {children}
    </span>
  );
}

