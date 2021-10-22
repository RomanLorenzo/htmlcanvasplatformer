export default function isHovered(mouse, ctx, object) {
    if (!mouse) return false;

    if (ctx.isPointInPath(object, mouse.offsetX, mouse.offsetY)) {
        return true;
    }
    else {
        return false;
    }
}
