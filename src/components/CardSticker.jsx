export default function CardSticker({ title, stage, runeUrl }) {
  return (
    <figcaption
      className={`${
        stage === "Midgard"
          ? "bg-accent_red"
          : stage === "Jotunheim"
          ? "bg-accent_yellow"
          : "bg-accent_blue"
      } drop-shadow-lg leading-7 text-lg lg:text-xl text-left row-start-0 col-start-0 row-start-1 col-start-1 self-end justify-self-start min-w-[8rem] max-w-[90%] mb-5 pl-1 pr-10 py-1.5 font-bodyFont flex`}
    >
      <img
        src={process.env.PUBLIC_URL + runeUrl}
        alt={stage}
        className="w-7 mb-[-0.4rem]"
      />
      {title}
    </figcaption>
  );
}
