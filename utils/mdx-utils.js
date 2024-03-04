import { api } from '../services/api';

export const getPosts = async () => {
    try {
        const { data } = await api.get(''); // Remova a string '/posts' aqui

        if (data) {
            return data;
        }
    } catch (error) {
        console.error("Erro ao buscar posts:", error);
    }

    return [];
}


export const getPostBySlug = async (id) => {
    try {
        const { data } = await api.get(`?id=eq.${id}`); // Alterado para buscar o post pelo ID diretamente

        if (data && data.length > 0) {
            return data[0]; // Retorna o primeiro post encontrado (se houver)
        }
    } catch (error) {
        console.error("Erro ao buscar post por ID:", error);
    }

    return null; // Retorna null se nenhum post for encontrado ou ocorrer algum erro
}

