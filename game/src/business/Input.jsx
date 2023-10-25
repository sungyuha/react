// 액션
export const Action = {
    Left: "Left",
    FastDrop: "FastDrop",
    Pause: "Pause",
    Quit: "Quit",
    Right: "Right",
    Rotate: "Rotate",
    SlowDrop: "SlowDrop"
};

// key
export const Key = {
    ArrowUp: Action.Rotate,
    ArrowDown: Action.SlowDrop,
    ArrowLeft: Action.Left,
    ArrowRight: Action.Right,
    KeyQ: Action.Quit,
    KeyP: Action.Pause,
    Space: Action.FastDrop
};

// 액션
export const actionIsDrop = (action) =>
    [Action.SlowDrop, Action.FastDrop].includes(action);

// 키 코드
export const actionForKey = (keyCode) => Key[keyCode];