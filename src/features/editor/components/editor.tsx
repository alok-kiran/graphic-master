"use client"
import React, { useEffect, useRef } from 'react'
import { fabric } from "fabric";
import { useEditor } from '../hooks/use-editor'
import Navbar from './navbar';
import Toolbar from './toolbar';
import { Sidebar } from './sidebar';
import Footer from './footer';

function Editor() {
    const { init } = useEditor();
    const canvasRef = useRef(null);
    const containerRef = useRef<HTMLDivElement>(null);

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
        <Navbar />
        <div className=' absolute h-[calc(100%-68px)] w-full top-[68px] flex'>
            <Sidebar />
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