interface Props extends React.PropsWithChildren {}

export default function layout({ children }: Props) {
  return (
    <div className="min-h-[100dvh] grid grid-rows-[auto_1fr_auto]">
      {children}
    </div>
  );
}
