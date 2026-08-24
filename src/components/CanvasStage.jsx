import { useAppSelector } from "../app/hooks"

export default function CanvasStage(){
    const shapes = useAppSelector((state) => state.shapes);

    return <svg>
        {shapes.map((shape) => (
            <rect 
                key={shape.id}
                x={shape.x}
                y={shape.y}
                height={shape.height}
                width={shape.width}
                fill={shape.fill}
            />
        ))}
    </svg>
}