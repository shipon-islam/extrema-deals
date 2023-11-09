import { useEffect } from "react";

export default function Deals() {
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, []);
  return <main className="min-h-[80vh]">deals</main>;
}
