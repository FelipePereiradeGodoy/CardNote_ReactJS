import React, { TextareaHTMLAttributes } from 'react';
import './TextArea.css';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
}

const TextArea: React.FC<TextAreaProps> = ({ name, ...rest }) => {
    return(
        <textarea className="textarea-block" id={name} {...rest} />
    );
} 

export default TextArea;