export const getPublicaciones = async() =>{
    const solucitud =  await fetch("http://localhost:3000/posts")
    
    const publicaciones = await solucitud.json();
    return publicaciones;
}