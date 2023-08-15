import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface ContentEditorProps {
  initialValue: string;
  handleOnChange: (value: string) => void;
}

function ContentEditor({ initialValue, handleOnChange }: ContentEditorProps) {
  return (
    <ReactQuill theme="snow" value={initialValue} onChange={handleOnChange} />
  );
}

export default ContentEditor;
