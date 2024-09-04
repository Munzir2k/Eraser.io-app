'use client';

import EditorJS from '@editorjs/editorjs';
import {useEffect, useRef, useState} from 'react';
import Header from '@editorjs/header';
// @ts-ignore
import Checklist from '@editorjs/checklist';
// @ts-ignore
import List from '@editorjs/list';
// @ts-ignore
import CodeTool from '@editorjs/code';
// @ts-ignore
import Paragraph from '@editorjs/paragraph';
import {useMutation} from 'convex/react';
import {api} from '@/convex/_generated/api';
import {toast} from 'sonner';
import {FILE} from '../../dashboard/_components/FileLists';

const rawDocument = {
  time: 1550476186479,
  blocks: [
    {
      data: {
        text: 'Document Name',
        level: 2,
      },
      id: '123',
      type: 'header',
    },
    {
      data: {
        level: 4,
      },
      id: '123',
      type: 'header',
    },
  ],
  version: '2.8.1',
};
function Editor({
  onSaveTrigger,
  fileId,
  fileData,
}: {
  onSaveTrigger: any;
  fileId: any;
  fileData: FILE | any;
}) {
  const [document, setDocument] = useState(rawDocument);
  const updateDocument = useMutation(api.files.updateDocument);
  const ref = useRef<EditorJS>();
  useEffect(() => {
    fileData && initEditor();
  }, [fileData]);

  useEffect(() => {
    console.log('trigger', onSaveTrigger);
    onSaveTrigger && onSaveDocument();
  }, [onSaveTrigger]);
  const initEditor = () => {
    const editor = new EditorJS({
      autofocus: true,
      tools: {
        code: CodeTool,
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
          shortcut: 'CMD+SHIFT+P',
        },
        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },
        list: {
          class: List,
          inlineToolbar: true,
          config: {
            defaultStyle: 'unordered',
          },
        },
        header: {
          // @ts-ignore
          class: Header,
          shortcut: 'CMD+SHIFT+H',
          inlineToolbar: true,
          config: {
            placeholder: 'Enter a header',
          },
        },
      },
      holder: 'editorjs',
      data: fileData.document ? JSON.parse(fileData.document) : document,
    });
    ref.current = editor;
  };

  const onSaveDocument = () => {
    if (ref.current) {
      ref.current
        .save()
        .then((outputData) => {
          console.log('Article data: ', outputData);
          updateDocument({
            _id: fileId,
            document: JSON.stringify(outputData),
          }).then(
            (resp) => {
              toast('Document Updated!');
            },
            (e) => {
              toast('Server Error!');
            }
          );
        })
        .catch((error) => {
          console.log('Saving failed: ', error);
        });
    }
  };
  return (
    <div>
      <div
        id="editorjs"
        className="ml-20"></div>
    </div>
  );
}

export default Editor;
