"use client";
import axios from "axios";
import { useEffect, useState } from 'react';

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
}

interface SaveArticleButtonProps {
  article: Article;
}

const SaveArticleButton: React.FC<SaveArticleButtonProps> = ({ article }) => {
 const handleSave = async () => {
   try {
     await axios.post("http://localhost:8000/api/news/saved-articles", {
       title: article.title,
       description: article.description,
       url: article.url,
       url_to_image: article.urlToImage,
     }, {
       headers: {
         Authorization: `Bearer ${localStorage.getItem('token')}`,
       },
     });
     alert("Article saved for offline reading!");
   } catch (error) {
     console.error("Error saving article:", error);
   }
 };

  return (
    <button
      onClick={handleSave}
      className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Save for Offline
    </button>
  );
};

export default SaveArticleButton;

////import { useAuth } from "@clerk/nextjs";
//import axios from "axios";
//
//const SaveArticleButton = ({ article }) => {
//  const { getToken } = useAuth();
//
//  const handleSave = async () => {
//    try {
//      const token = await getToken(); // Get the Clerk JWT
//
//      await axios.post("http://localhost:8000/api/news/saved-articles", article, {
//        headers: { Authorization: `Bearer ${token}` },
//      });
//
//      alert("Article saved!");
//    } catch (error) {
//      console.error("Error saving article:", error);
//    }
//  };
//
//  return <button onClick={handleSave}>Save Article</button>;
//};
//
//export default SaveArticleButton;


// "use client";
// import axios from "axios";
// import { useAuth } from "@clerk/nextjs";

// interface Article {
//   title: string;
//   description: string;
//   url: string;
//   urlToImage?: string;
// }

// interface SaveArticleButtonProps {
//   article: Article;
// }

// const SaveArticleButton: React.FC<SaveArticleButtonProps> = ({ article }) => {
//   const { getToken } = useAuth(); // Get Clerk authentication token

//   const handleSave = async () => {
//     try {
//       const token = await getToken();
//       console.log("Token:", token); // Log the token to see if it's null or undefined

//       if (!token) {
//         throw new Error("No token found");
//       }

//       await axios.post("http://localhost:8000/api/news/saved-articles", {
//         title: article.title,
//         description: article.description,
//         url: article.url,
//         url_to_image: article.urlToImage,
//       }, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       alert("Article saved for offline reading!");
//     } catch (error) {
//       console.error("Error saving article:", error);
//     }
//   };


//   return (
//     <button
//       onClick={handleSave}
//       className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//     >
//       Save for Offline
//     </button>
//   );
// };

// export default SaveArticleButton;
