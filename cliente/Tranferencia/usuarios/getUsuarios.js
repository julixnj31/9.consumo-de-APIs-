export const getUsuarios = async() =>{
    const solucitud =  await fetch("http://localhost:3000/users")
    
    const usuarios = await solucitud.json();
    return usuarios;
}