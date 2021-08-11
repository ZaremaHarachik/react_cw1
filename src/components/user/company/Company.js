export default function Company({name,catchPhrase,bs}) {
  return (
    <div className={"company"}>
   <h4>{name}</h4>
      <h4>{catchPhrase}</h4>
      <h4>{bs}</h4>
    </div>
  );
}