"use client";

import { useState } from "react";
import { ActiveTool, Editor } from "../types";
import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ToolbarProps {
    editor: Editor | undefined;
    activeTool: ActiveTool;
    onChangeActiveTool: (tool: ActiveTool) => void;
  };
  

const Toolbar = ({
    editor,
    activeTool,
    onChangeActiveTool,
}: ToolbarProps) => {
    const selectedObject = editor?.canvas?.getActiveObject();
    //const selectedObjectType = editor?.selectedObjects[0]?.type;

    const getProperty = (property: any) => {
        if(!selectedObject) return null;
        return selectedObject.get(property);
    };

    const fillColor = editor?.getActiveFillColor();
    const strokeColor = editor?.getActiveStrokeColor();
    const [properties, setProperties] = useState({
        fillColor,
    });

    console.log("selectedObject", selectedObject);

    if (!selectedObject) {
        return (
          <div className="shrink-0 h-[56px] border-b bg-white w-full flex items-center overflow-x-auto z-[49] p-2 gap-x-2" />
        );
      }

    return (
        <div className="shrink-0 h-[56px] border-b bg-white w-full flex items-center overflow-x-auto z-[49] p-2 gap-x-2">
            <div className=" flex items-center h-full justify-center">
                <Hint label="Color" side="bottom" sideOffset={5}>
                    <Button
                        size={"icon"}
                        className={cn(
                            activeTool === "fill" && "bg-gray-100"
                        )}
                        onClick={() => onChangeActiveTool("fill")}
                        variant="ghost"
                    >
                       <div className=" rounded-sm size-4 border" style={{
                        backgroundColor: typeof fillColor === 'string' ? fillColor : 'black',
                       }}>

                       </div>
                    </Button>
                </Hint>
                </div>
                <div className=" flex items-center h-full justify-center">
                <Hint label="Border Color" side="bottom" sideOffset={5}>
                    <Button
                        size={"icon"}
                        className={cn(
                            activeTool === "stroke-color" && "bg-gray-100"
                        )}
                        onClick={() => onChangeActiveTool("fill")}
                        variant="ghost"
                    >
                       <div className=" rounded-sm size-4 border-2 bg-white" style={{
                        borderColor: fillColor,
                       }}>

                       </div>
                    </Button>
                </Hint>
                </div>
                <div className=" flex items-center h-full justify-center">
                <Hint label="Stroke Color" side="bottom" sideOffset={5}>
                    <Button
                        size={"icon"}
                        className={cn(
                            activeTool === "stroke-color" && "bg-gray-100"
                        )}
                        onClick={() => onChangeActiveTool("stroke-color")}
                        variant="ghost"
                    >
                       <div className=" rounded-sm size-4 border-2 bg-white" style={{
                        borderColor: strokeColor,
                       }}>

                       </div>
                    </Button>
                </Hint>
                </div>
        </div>
    );
}

export default Toolbar;