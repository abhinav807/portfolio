import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { SITE } from "@/data/site";

export const alt = `${SITE.name} — Student Builder, Developer & Founder`;
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

const getFontData = async () => {
    try {
        const clashDisplay = await readFile(
            path.join(process.cwd(), "public/fonts/ClashDisplay-Semibold.ttf")
        );
        const cabinetGrotesk = await readFile(
            path.join(process.cwd(), "public/fonts/CabinetGrotesk-Medium.ttf")
        );
        return {
            clashDisplay: clashDisplay.buffer.slice(
                clashDisplay.byteOffset,
                clashDisplay.byteOffset + clashDisplay.byteLength
            ),
            cabinetGrotesk: cabinetGrotesk.buffer.slice(
                cabinetGrotesk.byteOffset,
                cabinetGrotesk.byteOffset + cabinetGrotesk.byteLength
            ),
        };
    } catch (error) {
        console.error("Failed to load fonts:", error);
        return null;
    }
};

export default async function Image() {
    try {
        const fontData = await getFontData();

        return new ImageResponse(
            (
                <div
                    style={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        backgroundColor: "#101010",
                        color: "#fafafa",
                        padding: "64px",
                        position: "relative",
                        backgroundImage:
                            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "18px",
                        }}
                    >
                        <div
                            style={{
                                width: "64px",
                                height: "64px",
                                borderRadius: "14px",
                                border: "2px solid #e9b949",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#e9b949",
                                fontFamily: "Clash Display",
                                fontSize: "26px",
                            }}
                        >
                            AG
                        </div>
                        <div
                            style={{
                                fontSize: "26px",
                                fontFamily: "Cabinet Grotesk",
                                color: "#a3a3a3",
                                letterSpacing: "0.02em",
                            }}
                        >
                            Delhi NCR, India
                        </div>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                        }}
                    >
                        <div
                            style={{
                                fontFamily: "Clash Display",
                                fontSize: "84px",
                                lineHeight: 1,
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Abhinav Goyal
                        </div>
                        <div
                            style={{
                                fontFamily: "Cabinet Grotesk",
                                fontSize: "34px",
                                lineHeight: 1.35,
                                color: "#d4d4d4",
                                maxWidth: "900px",
                            }}
                        >
                            Student builder, developer &amp; founder building with
                            code, AI and the web.
                        </div>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "14px",
                            fontFamily: "Cabinet Grotesk",
                            fontSize: "26px",
                            color: "#e9b949",
                        }}
                    >
                        <span
                            style={{
                                width: "12px",
                                height: "12px",
                                borderRadius: "50%",
                                backgroundColor: "#e9b949",
                            }}
                        />
                        github.com/abhinav807
                    </div>
                </div>
            ),
            {
                ...size,
                fonts: fontData
                    ? [
                        {
                            name: "Clash Display",
                            data: fontData.clashDisplay,
                            weight: 600 as const,
                            style: "normal" as const,
                        },
                        {
                            name: "Cabinet Grotesk",
                            data: fontData.cabinetGrotesk,
                            weight: 500 as const,
                            style: "normal" as const,
                        },
                    ]
                    : undefined,
            }
        );
    } catch (error) {
        console.error("Error generating OpenGraph image:", error);
        return new Response(
            `Failed to generate image: ${error instanceof Error ? error.message : "Unknown error"}`,
            {
                status: 500,
            }
        );
    }
}
