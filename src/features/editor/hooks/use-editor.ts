import { fabric } from 'fabric';
import { useCallback, useState, useMemo } from "react";
import { useAutoResize } from './use-auto-resize';
import { BuildEditorProps, CIRCLE_OPTIONS, Editor, FILL_COLOR, STROKE_COLOR, STROKE_DASH_ARRAY, STROKE_WIDTH } from '../types';

const buildEditor = ({
    canvas,
    fillColor,
    strokeColor,
    strokeWidth,
    strokeDashArray,
}: BuildEditorProps): Editor => {
    return {
        addCircle: () => {
            const object = new fabric.Circle({
                ...CIRCLE_OPTIONS,
                fill: fillColor,
                stroke: strokeColor,
                strokeWidth: strokeWidth,
                strokeDashArray: strokeDashArray,
              });
            canvas.add(object);
            canvas.setActiveObject(object);
        }
    }
};

export const useEditor = () => {
    const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
    const [container, setContainer] = useState<HTMLDivElement | null>(null);
    const [fillColor, setFillColor] = useState(FILL_COLOR);
    const [strokeColor, setStrokeColor] = useState(STROKE_COLOR);
    const [strokeWidth, setStrokeWidth] = useState(STROKE_WIDTH);
    const [strokeDashArray, setStrokeDashArray] = useState<number[]>(STROKE_DASH_ARRAY);

   useAutoResize({
        canvas,
        container,
    });

    const editor = useMemo(() => {
        if(canvas){
            return buildEditor({canvas});
        }
        return undefined;
    }, [canvas]);

    const init = useCallback(({
        initialCanvas,
        initialContainer
    }: {
        initialCanvas: fabric.Canvas;
        initialContainer: HTMLDivElement;
    }) => {
        console.log('Editor initialized', initialCanvas, initialContainer);

        fabric.Object.prototype.set({
          cornerColor: "#FFF",
          cornerStyle: "circle",
          borderColor: "#3b82f6",
          borderScaleFactor: 1.5,
          transparentCorners: false,
          borderOpacityWhenMoving: 1,
          cornerStrokeColor: "#3b82f6",
        })

        const initialWorkspace = new fabric.Rect({
            width: 900,
            height: 1200,
            name: 'clip',
            fill: 'white',
            selectable: false,
            hasControls: false,
            shadow: new fabric.Shadow({
                color: 'rgba(0,0,0,0.8)',
                blur: 5,
                offsetX: 0,
                offsetY: 0,
            }),
        });

        initialCanvas.setWidth(initialContainer.offsetWidth);
        initialCanvas.setHeight(initialContainer.offsetHeight);

        initialCanvas.add(initialWorkspace);
        initialCanvas.centerObject(initialWorkspace);
        initialCanvas.clipPath = initialWorkspace;

        setCanvas(initialCanvas);
        setContainer(initialContainer);

        const test = new fabric.Rect({
            width: 100,
            height: 100,
            fill: '#000000',
        });

        initialCanvas.add(test);
        initialCanvas.centerObject(test);
    }, []);

    return {
        init,
        editor,
    }
};