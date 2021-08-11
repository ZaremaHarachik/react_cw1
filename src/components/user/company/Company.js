export default function Company({name,catchPhrase,bs}) {
  return (
    <div className={"company"}>
   <h4>name : {name}</h4>
      <h4>catchPhrase : {catchPhrase}</h4>
      <h4>bs : {bs}</h4>
    </div>
  );
}