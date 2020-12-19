import React from 'react';
import styled from 'styled-components';

const CommentWrapper = styled.div`
    border-top: 1px solid;
    border-color: rgba(50, 115, 220, 0.3);
`;

const Comment = ({ comment }) => (
    <CommentWrapper className="flex flex-col justify-center items-center text-sm pt-2 mt-2">
        <div className="flex flex-row justify-center">
            {/* <img alt="avatar" width="24" height="24" className="rounded-full w-10 h-10 mr-4 shadow-lg mb-4" src="https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png" /> */}
            <img alt="avatar" className="rounded-full w-6 h-6 mr-2 shadow-lg mb-2" src={comment.commenter.avatar || 'https://cdn2.iconfinder.com/data/icons/office-and-business-19/65/61-512.png'} />
            <div>
                <span className="text-brand-green font-semibold text-sm mr-1">{comment.commenter.name}</span>
                - agregó comentario {comment.created_at}
            </div>
        </div>
        <p className="w-full ml-16 text-gray-600 text-sm text-left">{comment.comment}</p>
    </CommentWrapper>
);

export default Comment;
