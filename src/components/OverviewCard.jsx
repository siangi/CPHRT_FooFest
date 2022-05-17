export default function OverviewCard({ imgUrl }) {
  return (
    <article className="h-full w-full">
      {imgUrl.includes("http://") ? (
        <img className="object-cover h-full w-full" src={imgUrl} alt="" />
      ) : (
        <img
          className="object-cover h-full w-full"
          src={`https://cphrt.herokuapp.com/logos/${imgUrl}`}
          alt=""
        />
      )}
    </article>
  );
}
