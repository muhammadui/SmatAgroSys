import * as React from "react";

// Style
import "./AddPost.css";

interface AddPostProps {
    show: boolean;
    setShow: Function;
}

const AddPost = ({ show, setShow }: AddPostProps) => {

    const handleSubmit = (e: any) => {
        e.preventDefault();

        console.log("Form value: ", {post: e.target.post.value});

    }

    const handleClose = (e: any) => {
        if(e.target.className && e.target.className.startsWith("addpost_section")){
            return setShow(false);
        }
    }

    return (
        <div className={`addpost_section ${show ? 'show' : ''}`} onClick={handleClose}>
            <div className="container">
                <form onSubmit={handleSubmit}>

                    <div className="form_header">
                        <h2 className="mr">Create a post</h2>
                        <span className="close_btn" onClick={() => setShow(false)}>X</span>
                    </div>

                    <div className="form_body">
                        <textarea name="post" id="post" 
                            className="input"
                            placeholder="Add post..."
                        ></textarea>

                        <div className="form_group">
                            <input type="submit" value="Add Post" className="btn_bg" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddPost;