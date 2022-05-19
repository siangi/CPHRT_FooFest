export default function CardSticker({ title, stage }) {
  return (
    <figcaption
      className={`${
        stage === "Midgard"
          ? "bg-accent_red"
          : stage === "Jotunheim"
          ? "bg-accent_yellow"
          : "bg-accent_blue"
      } text-lg text-left row-start-0 col-start-0 row-start-1 col-start-1 self-end justify-self-start min-w-[8rem] max-w-full mb-5 px-3 py-1.5 font-bodyFont`}
    >
      {title}
    </figcaption>
  );
}
