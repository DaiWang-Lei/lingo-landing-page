import React, { useCallback, useRef, useEffect } from "react";

import * as player from "@pinyinma/player";
//@ts-ignore
import ReactResizeDetector from "react-resize-detector";
//@ts-ignore
import mountainSrc from "./mountain/scene.gltf";
//@ts-ignore
import ipadSrc from "./ipad.png";
import { global, assert } from "@lincode/utils";
import { useIsLoaded } from "../../App";

const Mountain3D: React.FC<{ currentPage: number }> = props => {
    const onResize = useCallback((w: number, h: number) => {
        player.config({ canvasSize: [w, h] });
    }, []);

    const playerContainerRef = useRef<any>();

    const setIsLoaded = useIsLoaded()[1];

    useEffect(() => {
        const el = playerContainerRef.current;
        player.mount(el);

        player.config({
            canvasSize: [el.clientWidth, el.clientHeight],
            size: [1500, 1000],
            canvasColor: "none",
            outlineVisible: false
        });
        
        global.loaded = () => {
            setIsLoaded(true);

            const preload = document.querySelector("#preload");
            assert(preload);

            setTimeout(() => {
                preload.animate([
                    { opacity: 1 },
                    { opacity: 0 }
                ], {
                    duration: 500,
                    iterations: 1,
                    fill: "forwards"
    
                }).onfinish = () => preload.parentElement?.removeChild(preload);

            }, 100);
        };
        
        player.parse(
            `shenming loaded = gongneng () {}
            
            xiaoshan = xin Moxing("${mountainSrc}")
            xiaoshan.kuan = 500

            zhongxin = xin Lifangti()
            zhongxin.touming = 100
            zhongxin.kuan = 20
            zhongxin.gao = 20
            zhongxin.chang = 20
            zhongxin.x = 440
            zhongxin.y = 150
            zhongxin.z = -130

            shijiao.zhongxin = zhongxin
            shijiao.jvli = -1500
            shijiao.xuanzhuan_y = -45
            
            xiaoshan.zairu = gongneng () {
                sudu = 0.05

                xiaoshan.xunhuan = gongneng () {
                    shijiao.xuanzhuan_x += sudu

                    ruguo (shijiao.xuanzhuan_x > 30) {
                        sudu = -0.05
                    }
                    fouze ruguo (shijiao.xuanzhuan_x < -30) {
                        sudu = 0.05
                    }
                }
                loaded()
            }`
        );
        return () => {
            player.dispose();
        };
    }, []);

    if (props.currentPage === 0)
        player.play();
    else
        player.pause();

    return (
        <div className="w-full flex justify-center">
            <div className="pointer-events-none" ref={playerContainerRef} style={{ minWidth: 700 }}>
                <ReactResizeDetector handleWidth handleHeight onResize={onResize} />
                <img src={ipadSrc} className="mt-40 lg:mt-64" style={{ transform: "translateY(-10%)" }} />
            </div>
        </div>
    );
};
export default Mountain3D;