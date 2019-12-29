import { useState, useEffect, useCallback } from "react";
import Events from "@lincode/events";

export default function<T> (data: T) {
    const events = new Events<T, "data">();
    events.setState("data", data);

    return () => {
        const [state, setState] = useState(events.getState("data")!);

        const _setState = useCallback((val: T) => events.setState("data", val), []);

        useEffect(() => {
            //@ts-ignore
            const handle = events.on("data", setState);
            return () => {
                handle.cancel();
            };
        }, []);

        return [state, _setState] as const;
    };
}