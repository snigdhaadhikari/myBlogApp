// import {useContext,createContext, useState} from "react";
// import useBlog from "../hooks/useBlogs";

// const BlogContext = createContext(null);

// export const BlogCOntextProvider = ({children}) =>{
//     const [title,setTitle] = useState("");
//     const {data: blogs,loading,error,msg} = useBlog({title});

//     return(
//         <>
//         <BlogContext.Provider value = {{blogs, loading, error, msg, setTitle}}>
//             {children}
//         </BlogContext.Provider>
//         </>
//     )
// };
// export const useBlogContext = () =>{
//     const context = useContext(BlogContext);
//     if(!context) throw new Error("Blogs COntext must be wrapped inside provider");
//     return context;
// };