import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const PostForm = ({ addPost }) => {
	const [text, setText] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();
		addPost({ text });
		setText("");
	};

	return (
		<div className="post-form">
			<div className="bg-primary p">
				<h3>Say Something...</h3>
			</div>
			<form onSubmit={(e) => onSubmit(e)} className="form my-1">
				<CKEditor
					name="text"
					editor={ClassicEditor}
					data={text}
					onChange={(event, editor) => {
						setText(editor.getData());
					}}
				/>
				<input type="submit" className="btn btn-dark my-1" value="Submit" />
			</form>
		</div>
	);
};

PostForm.propTypes = {
	addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
