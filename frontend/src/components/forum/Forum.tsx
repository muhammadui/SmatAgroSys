import * as React from "react";
import { useState } from "react";
import AddPost from "./addPost/AddPost";

// Style
import "./Forum.css";

const Forum = () => {
    const [showAddPost, setShowAddPost] = useState<boolean>(false);

    return (
        <>
            {/* Add post */}
            <AddPost show={showAddPost} setShow={setShowAddPost} />

            <div className="forum_section">
                <h2 className="dash_header text_primary">General Forum</h2>
                <hr />

                {/* Forum Header Section */}
                <div className="forum_header mt">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nesciunt ullam quaerat doloremque vitae, odit temporibus 
                        consequatur minima.
                    </p>

                    <div className="flex_between_center reverse">
                        <div className="flex_start_center">
                            <span className="mr">Sort By:</span>
                            <select name="sort" id="sort">
                                <option value="recent">Recent post</option>
                                <option value="all">All post</option>
                                <option value="this_month">This month</option>
                            </select>
                        </div>

                        <button className="btn_bg" onClick={() => setShowAddPost(true)}>Ask Question</button>
                    </div>
                </div>

                {/* Forum Card Section */}
                <div className="mt2">
                    <div className="forum_card">
                        <div className="card_header">
                            <div className="image">JD</div>
                            <div className="content">
                                <h4>John Doe <span>Farmer</span></h4>
                                <small>1 hour ago</small>
                            </div>
                        </div>

                        <div className="card_body mt2">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Quo numquam voluptas officia, eligendi velit ratione unde 
                                quasi nobis quidem est, consectetur, nam quisquam asperiores? 
                                Nobis quibusdam illum assumenda rem quae.
                            </p>

                            <div className="flex_end_center mt2">
                                <button className="btn span_btn">
                                    <span className="arrow mr">
                                        <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 16V10L8 8L0 6V0L19 8L0 16Z" fill="black"/>
                                        </svg>
                                    </span>
                                    <span className="span_btn">5 Comments</span>
                                </button>
                            </div>

                            <div className="form_group">
                                <textarea className="input" 
                                    placeholder="Add comment here..."
                                    title="You can also type @ followed by the user to mention user in the comment)."
                                ></textarea>

                                <div className="flex_end_center mt2">
                                    <button className="btn_bg">
                                        <span className="mr">Send</span>
                                        <span className="arrow">
                                            <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 16V10L8 8L0 6V0L19 8L0 16Z"/>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt2">
                    <div className="forum_card">
                        <div className="card_header">
                            <div className="image">PP</div>
                            <div className="content">
                                <h4>Peter Paul<span>Farmer</span></h4>
                                <small>1 hour ago</small>
                            </div>
                        </div>

                        <div className="card_body mt2">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Quo numquam voluptas officia, eligendi velit ratione unde 
                                quasi nobis quidem est, consectetur, nam quisquam asperiores? 
                                Nobis quibusdam illum assumenda rem quae.
                            </p>

                            <div className="flex_end_center mt2">
                                <button className="btn span_btn">
                                    <span className="arrow mr">
                                        <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 16V10L8 8L0 6V0L19 8L0 16Z" fill="black"/>
                                        </svg>
                                    </span>
                                    <span className="span_btn">5 Comments</span>
                                </button>
                            </div>

                            <div className="form_group">
                                <textarea className="input" 
                                    placeholder="Add comment here..."
                                    title="You can also type @ followed by the user to mention user in the comment)."
                                ></textarea>

                                <div className="flex_end_center mt2">
                                    <button className="btn_bg">
                                        <span className="mr">Send</span>
                                        <span className="arrow">
                                            <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 16V10L8 8L0 6V0L19 8L0 16Z"/>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Forum;