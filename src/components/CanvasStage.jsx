import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { shapeSelected, selectionCleared } from "../features/selection/selectionSlice";
import { shapeMoved, shapesDeleted } from "../features/shapes/shapesSlice";
import { panned } from "../features/viewport/viewportSlice";

export default function CanvasStage(){
    const shapes = useAppSelector((state) => state.shapes);
    const selectedIds = useAppSelector((state) => state.selections.selectedIds);
    const viewport = useAppSelector((state) => state.viewport);

    const dispatch = useAppDispatch();

    const [drag, setDrag] = useState(null);
    const [pan, setPan] = useState(null);

    function handlePointerDown(e, shape) {
        e.stopPropagation();
        setDrag({
            id: shape.id,
            shapeX: shape.x,
            shapeY: shape.y,
            pointerStartX: e.clientX,
            pointerStartY: e.clientY,
            dx: 0,
            dy: 0
        })
    }

    function handlePointerMove(e) {
        if(!drag)   return;
        setDrag({...drag, dx: e.clientX - drag.pointerStartX, dy: e.clientY - drag.pointerStartY})
    }

    function handlePointerUp() {
        if(!drag)   return;
        dispatch(shapeMoved({
                id: drag.id,
                x: drag.shapeX + drag.dx,
                y: drag.shapeY + drag.dy
            })
        )
        setDrag(null)
    }

    const isShapeSelected = (id) => {
        return selectedIds.includes(id);
    }

    useEffect(() => {
        function handleKeyDown(e) {
            if(e.key == 'Delete' || e.key == 'Backspace') {
                if(selectedIds.length > 0)
                    dispatch(shapesDeleted([...selectedIds]))
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedIds])

    return <svg 
                onClick={() => dispatch(selectionCleared())}
                onPointerMove={(e) => {
                    handlePointerMove(e)
                    if(pan != null) {
                        setPan({...pan, dx: e.clientX - pan.pointerStartX, dy: e.clientY - pan.pointerStartY})
                    }
                }}
                onPointerUp={() => {
                    handlePointerUp();
                    if(!pan)    return;
                    dispatch(panned({
                        dx: pan.dx,
                        dy: pan.dy
                    }));
                    setPan(null);
                }}
                onPointerDown={(e) => {
                    e.currentTarget.setPointerCapture(e.pointerId);
                    setPan({dx: 0, dy: 0, pointerStartX: e.clientX, pointerStartY: e.clientY});
                }}
            >
            <g transform={`translate(${viewport.x + (pan?.dx ?? 0)}, ${viewport.y + (pan?.dy ?? 0)})`}>
                {shapes.map((shape) => {

                    const isDragging = drag?.id === shape.id;
                    const x = isDragging ? shape.x + drag.dx : shape.x;
                    const y = isDragging ? shape.y + drag.dy : shape.y;

                    return <rect 
                        key={shape.id}
                        x={x}
                        y={y}
                        height={shape.height}
                        width={shape.width}
                        fill={shape.fill}
                        onClick={(e) => {
                            e.stopPropagation();
                            dispatch(shapeSelected(shape.id))
                        }}
                        stroke={isShapeSelected(shape.id) ? "white" : null}
                        strokeWidth={isShapeSelected(shape.id) ? 2 : 0}
                        onPointerDown={(e) => {
                            e.currentTarget.setPointerCapture(e.pointerId);
                            handlePointerDown(e, shape)
                        }}
                    />
                }
                )}
            </g>
    </svg>
}