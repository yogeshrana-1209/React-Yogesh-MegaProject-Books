import axios from 'axios';

const BASE_URL = 'http://localhost:3001/books';

export const booksApi = {
  fetchBooks: async () => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching books:', error);
      throw error;
    }
  },

  createBook: async (title) => {
    try {
      const response = await axios.post(BASE_URL, { title });
      return response.data;
    } catch (error) {
      console.error('Error creating book:', error);
      throw error;
    }
  },

  updateBook: async (id, newTitle) => {
    try {
      const response = await axios.put(`${BASE_URL}/${id}`, {
        title: newTitle,
      });
      return response.data;
    } catch (error) {
      console.error('Error updating book:', error);
      throw error;
    }
  },

  deleteBook: async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      return id;
    } catch (error) {
      console.error('Error deleting book:', error);
      throw error;
    }
  }
};