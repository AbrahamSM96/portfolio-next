import { useEffect, useRef, startTransition } from "react";

export default function DynamicYear() {
  const refDate = useRef(null);

  const date = new Date().getFullYear();
  refDate?.current?.append(date);

  useEffect(() => {
    startTransition(() => {
      refDate?.current?.append(date);
    });
  }, [date]);

  return <span ref={refDate}></span>;
}
