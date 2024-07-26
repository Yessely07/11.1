// src/components/PostList.js
"use client";  // componente de cliente

import axios from 'axios';  // Importa axios para hacer peticiones HTTP
import { useState, useEffect } from 'react';  // Importa hooks de React para manejar estado y efectos secundarios
import PostForm from './PostForm';  // Importa el componente PostForm para crear/editar publicaciones


export default function PostList() {
  // estado ac-ac el pos
  const [posts, setPosts] = useState([]);  // Estado para almacenar la lista de publicaciones
  const [editingPost, setEditingPost] = useState(null);  // Estado para almacenar la publicación en edición

  // después de que el componente haya rende por primera vez(Arg,una función callback y un array de dependencias)
  useEffect(() => {
    fetchPosts();  // Llama a fetchPosts para obtener las publicaciones de api
  }, []);
//no depen de var.o estado
  // Función asíncrona para obtener publicaciones de la API
  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); //a que la solicitud se complete y obtener la respuesta // Hace una petición GET a la API
      setPosts(response.data);  // datos devueltos por la API Almacena los datos recibidos en el estado posts
    } catch (error) {
      console.error('Error fetching posts:', error);  // Muestra un error en la consola si la petición falla
    }
  };

  // Función asíncrona para eliminar una publicación de la API
  const deletePost = async (id) => {
    try {
      await axios.delete(`/api/posts/${id}`);  // Hace una petición DELETE a la API para eliminar la publicación
      fetchPosts();  // Actualiza la lista de publicaciones después de eliminar una
    } catch (error) {
      console.error('Error deleting post:', error);  // Muestra un error en la consola si la petición falla
    }
  };

  // Renderiza el componente
  return (
    <div>
      <h2 className="text-center text-xl font-semibold mb-4">List CRUD</h2>  {/* Título del componente */}
      <PostForm post={editingPost} onSave={() => { setEditingPost(null); fetchPosts(); }} />  {/* Componente para crear/editar publicaciones */}
      <div className="bg-white p-6 rounded shadow">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-700 text-white">Id</th>
              <th className="px-4 py-2 bg-gray-700 text-white">Title</th>
              <th className="px-4 py-2 bg-gray-700 text-white">Body</th>
              <th className="px-4 py-2 bg-gray-700 text-white">Editar</th>
              <th className="px-4 py-2 bg-gray-700 text-white">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>  {/* Cada fila de la tabla representa una publicación */}
                <td className="border px-4 py-2">{post.id}</td>
                <td className="border px-4 py-2">{post.title}</td>
                <td className="border px-4 py-2">{post.body}</td>
                <td className="border px-4 py-2 text-blue-500 cursor-pointer" onClick={() => setEditingPost(post)}>Editar</td>  {/* Botón para editar la publicación */}
                <td className="border px-4 py-2 text-red-500 cursor-pointer" onClick={() => deletePost(post.id)}>Eliminar</td>  {/* Botón para eliminar la publicación */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

