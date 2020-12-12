import React from 'react';


const Comment = ({comment}) => (
    <div className="flex flex-col justify-center items-center text-sm">
        <div className="flex flex-row justify-center mr-2">
            {/*<img alt="avatar" width="24" height="24" className="rounded-full w-10 h-10 mr-4 shadow-lg mb-4" src="https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png" />*/}
            <img alt="avatar" className="rounded-full w-6 h-6 mr-2 shadow-lg mb-2" src={comment.commenter.avatar} />
            <div>
                <span className="text-brand-green font-semibold text-sm mr-1">{comment.commenter.name}</span>
                - agregó comentario {comment.created_at}
            </div>
        </div>
        <p className="w-4/5 text-gray-600 text-sm text-left">{comment.comment}</p>
    </div>
);

export default Comment;
