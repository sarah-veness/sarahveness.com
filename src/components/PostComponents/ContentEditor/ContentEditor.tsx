import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import styles from './content-editor.module.scss';

interface ContentEditorProps {
  initialValue: string;
  handleOnChange: (value: string) => void;
}

function ContentEditor({ initialValue, handleOnChange }: ContentEditorProps) {
  const moduleOptions = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
  ];
  return (
    <ReactQuill
      className={styles.quill}
      theme="snow"
      value={initialValue}
      onChange={handleOnChange}
      modules={moduleOptions}
      formats={formats}
    />
  );
}

export default ContentEditor;
