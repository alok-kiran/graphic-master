"use client"
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { fabric } from "fabric";
import { useEditor } from '../hooks/use-editor'
import Navbar from './navbar';
import Toolbar from './toolbar';
import { Sidebar } from './sidebar';
import Footer from './footer';
import { ActiveTool } from '../types';

function Editor() {
    const { init } = useEditor();
    const canvasRef = useRef(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeTool, setActiveTool] = useState<ActiveTool>("select");

    const onChangeActiveTool = useCallback((tool: ActiveTool) => {
      if (tool === "draw") {
       // editor?.enableDrawingMode();
      }
  
      if (activeTool === "draw") {
        //editor?.disableDrawingMode();
      }
  
      if (tool === activeTool) {
        return setActiveTool("select");
      }
      
      setActiveTool(tool);
    }, [activeTool]);

    useEffect(() => {
        const canvas = new fabric.Canvas(canvasRef.current, {
          controlsAboveOverlay: true,
          preserveObjectStacking: true,
        });
    
        init({
          initialCanvas: canvas,
          initialContainer: containerRef.current!,
        });
    
        return () => {
          canvas.dispose();
        };
      }, [init]);

  return (
    <div className=' h-full flex flex-col'>
        <Navbar 
          activeTool={activeTool}
          onChangeActiveTool={onChangeActiveTool}
        />
        <div className=' absolute h-[calc(100%-68px)] w-full top-[68px] flex'>
            <Sidebar 
              activeTool={activeTool}
              onChangeActiveTool={onChangeActiveTool}
            />
        <main className=' bg-muted flex-1 overflow-auto relative flex flex-col'>
            <Toolbar />
            <div ref={containerRef} className=' flex-1 h-[calc(100%-124px)] bg-muted'>
            <canvas ref={canvasRef}></canvas>
        </div>
        <Footer />
        </main>
    </div>
    </div>
  )
}

export default Editor
