function Saludo({nombre, id}) {
  return (
    <>
      <h1 className="title1">Hola, mi nombre es:</h1>
      <p>{nombre}</p>
      <p>Mi id es {id}</p>
    </>
  );
}   


export default Saludo;
