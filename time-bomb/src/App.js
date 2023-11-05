import './App.css';

function PlayerRow({ player }) {
  return (
    <tr>
      <td>{player.name}</td>
      <td>{player.job}</td>
    </tr>
  );
}

function PlayerTalbe({ players }) {
  const rows = [];

  players.forEach((player) => {
    rows.push(
      <PlayerRow player={player} key={player.name} />
    )
  });

  return (
    <table>
      <thead>
        <tr>
          <th>名前</th>
          <th>役割</th> </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

const PLAYERS = [
  {name: "のびた", job: "警察"},
  {name: "ジャイアン", job: "警察"},
  {name: "しずかちゃん", job: "警察"},
  {name: "スネ夫", job: "警察"},
];

export default function App() {
  return <PlayerTalbe players={PLAYERS}/>;
}
