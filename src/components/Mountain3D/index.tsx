import React, { useCallback, useRef, useEffect } from "react";

import * as player from "@pinyinma/player";
//@ts-ignore
import ReactResizeDetector from "react-resize-detector";
//@ts-ignore
import mountainSrc from "./mountain/scene.gltf";
//@ts-ignore
import airplaneSrc from "./airplane/scene.gltf";
//@ts-ignore
import ipadSrc from "./ipad.jpg";

const Mountain3D: React.FC = () => {
    const onResize = useCallback((w: number, h: number) => {
        player.config({ canvasSize: [w, h] });
    }, []);

    const playerContainerRef = useRef<any>();

    useEffect(() => {
        const el = playerContainerRef.current;
        player.mount(el);

        player.config({
            canvasSize: [el.clientWidth, el.clientHeight],
            size: [1500, 1000],
            canvasColor: "none",
            outlineVisible: false
        });
        
        player.parse(
            `xiaoshan = xin Moxing("${mountainSrc}")
            xiaoshan.kuan = 500
            
            feiji = xin Moxing("${airplaneSrc}")
            feiji.kuan = 10
            feiji.z = -90
            feiji.x = 400
            feiji.y = 100

            feiji_zhongxin = xin Lifangti()
            feiji_zhongxin.touming = 100
            feiji_zhongxin.kuan = 20
            feiji_zhongxin.gao = 20
            feiji_zhongxin.chang = 20
            feiji_zhongxin.x = 440
            feiji_zhongxin.y = 50
            feiji_zhongxin.z = -130

            feiji.zairu = gongneng () {
                feiji_zhongxin.tianjia(feiji)
                feiji_zhongxin.xunhuan = gongneng () {
                    feiji_zhongxin.xuanzhuan_x -= 0.5
                }
            }

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
            }`
        );
        return () => {
            player.dispose();
        };
    }, []);

    return (
        <div className="w-full flex justify-center">
            <div ref={playerContainerRef} style={{ minWidth: 700 }}>
                <ReactResizeDetector handleWidth handleHeight onResize={onResize} />
                <img src={ipadSrc} className="mt-40 sm:mt-64" style={{ transform: "translateY(-10%)" }} />
            </div>
        </div>
    );
};
export default Mountain3D;