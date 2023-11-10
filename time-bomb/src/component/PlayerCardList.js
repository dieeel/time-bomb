import PlayerCard from "./PlayerCard";

function PlayerCardList({ items }) {
  const rows = [];

  items.forEach((item) => {
    rows.push(
        <PlayerCard item={item} />
    )
  });

  return (
      <>{rows}</>
  );
}

export default PlayerCardList;
