import { useAppDispatch, useAppSelector } from "../app/hooks"
import { shapeSelected, selectionCleared } from "../features/selection/selectionSlice";

export default function CanvasStage(){
    const shapes = useAppSelector((state) => state.shapes);
    const selectedIds = useAppSelector((state) => state.selections.selectedIds);
    const dispatch = useAppDispatch();

    const isShapeSelected = (id) => {
        return selectedIds.includes(id);
    }

    return <svg onClick={() => dispatch(selectionCleared())}>
        {shapes.map((shape) => (
            <rect 
                key={shape.id}
                x={shape.x}
                y={shape.y}
                height={shape.height}
                width={shape.width}
                fill={shape.fill}
                onClick={(e) => {
                    e.stopPropagation();
                    dispatch(shapeSelected(shape.id))
                }}
                stroke={isShapeSelected(shape.id) ? "white" : null}
                strokeWidth={isShapeSelected(shape.id) ? 2 : 0}
            />
        ))}
    </svg>
}