import { BsSpotify } from "react-icons/bs";

export default function FavoriteCollapse({ isCollapseOpen, bandObj }) {
  return isCollapseOpen ? (
    <div className=" col-start-1 col-end-7">
      <div
        className={`${
          bandObj.color === "accent_red"
            ? "bg-accent_red"
            : bandObj.color === "accent_blue"
            ? "bg-accent_blue"
            : "bg-accent_yellow"
        } h-full w-full mt-2 space-y-2`}
      >
        <p>
          <strong>Stage: </strong>
          {bandObj.stage}
        </p>
        <p>
          <strong>Genre: </strong>
          {bandObj.genre}
        </p>
        <p>
          <strong>Members: </strong>
          {bandObj.members.join(", ")}
        </p>
        <strong>
          <a href="" target="_blank" className="flex justify-between mt-6">
            Listen on Spotify
            <BsSpotify size="1.5rem" />
          </a>
        </strong>
      </div>
    </div>
  ) : null;
}
