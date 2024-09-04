'use client';
import React, {useEffect, useState} from 'react';
import WorkspaceHeader from '../_components/WorkspaceHeader';
import Editor from '../_components/Editor';
import {useConvex} from 'convex/react';
import {api} from '@/convex/_generated/api';
import {FILE} from '../../dashboard/_components/FileLists';
import Canvas from '../_components/Canvas';

function Workspace({params}: any) {
  const [triggerSave, setTriggerSave] = useState(false);
  const convex = useConvex();
  const [fileData, setFileData] = useState<FILE | any>();

  useEffect(() => {
    params.fileId && getFileData();
  }, []);

  async function getFileData() {
    const result = await convex.query(api.files.getFileById, {
      _id: params.fileId,
    });
    setFileData(result);
  }
  return (
    <div>
      <WorkspaceHeader onSave={() => setTriggerSave(!triggerSave)} />

      {/* Workspace Layout */}

      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        {/* Document */}
        <div className="h-screen mr-10">
          <Editor
            onSaveTrigger={triggerSave}
            fileId={params.fileId}
            fileData={fileData}
          />
        </div>

        {/* Whiteboard/Canvas */}
        <div className="h-screen border-l dark:border-zinc-300 pl-3">
          <Canvas
            onSaveTrigger={triggerSave}
            fileId={params.fileId}
            fileData={fileData}
          />
        </div>
      </div>
    </div>
  );
}

export default Workspace;
